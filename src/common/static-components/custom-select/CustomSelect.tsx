import { FC } from "react";

import styles from "./custom_select.module.scss";

export interface CustomSelectDataType {
  id: number;
  selectItem: string;
}

export interface CustomSelectPropsType {
  title: string;
  selectTitle: string;
  customSelectData: CustomSelectDataType[];
}

const CustomSelect: FC<CustomSelectPropsType> = ({
  title,
  selectTitle,
  customSelectData,
}) => {
  return (
    <div className={styles.div}>
      <h3>{title}</h3>
      <div className="form-floating">
        <select
          className="form-select bg-dark text-white"
          id="floatingSelectGrid"
        >
          <option selected>{selectTitle}</option>
          {!customSelectData || customSelectData.length === 0 ? (
            <h1>Ooops, server error, please wait...</h1>
          ) : (
            customSelectData.map((item: CustomSelectDataType) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.selectItem}
                </option>
              );
            })
          )}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
