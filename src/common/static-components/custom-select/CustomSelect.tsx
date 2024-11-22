import { FC, useState, useEffect } from "react";
import styles from "./custom_select.module.scss";

export interface CustomSelectDataType {
  id: number | string;
  selectItem: string;
}

export interface CustomSelectPropsType {
  title?: string;
  customSelectData: CustomSelectDataType[];
  handleSelectId?: (key: string | number) => void;
}

const CustomSelect: FC<CustomSelectPropsType> = ({
  title,
  customSelectData,
  handleSelectId,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | number>("");

  // Устанавливаем первый элемент как значение по умолчанию
  useEffect(() => {
    if (customSelectData.length > 0) {
      const defaultValue = customSelectData[0].id;
      setSelectedValue(defaultValue);
      if (handleSelectId) {
        handleSelectId(defaultValue);
      }
    }
  }, [customSelectData, handleSelectId]);

  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (handleSelectId) {
      handleSelectId(value);
    }
  };

  return (
    <div className={styles.div}>
      {title && <h3>{title}</h3>}
      <div className="form-floating">
        <select
          className="form-select"
          id="floatingSelectGrid"
          value={selectedValue}
          onChange={handlerSelect}
        >
          {customSelectData.length === 0 ? (
            <option disabled>Ooops, server error, please wait...</option>
          ) : (
            customSelectData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.selectItem}
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
