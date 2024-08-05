import styles from "./custom_select.module.scss";

export interface CustomSelectDataType {
  id: number | string;
  selectItem: string;
}

export interface CustomSelectPropsType<T> {
  title?: string;
  selectTitle: string;
  customSelectData: T[];
  mapDataToSelect: (data: T) => CustomSelectDataType;
  handleSelectId?: (key: string | number) => void;
}

const CustomSelect = <T,>({
  title,
  selectTitle,
  customSelectData,
  mapDataToSelect,
  handleSelectId,
}: CustomSelectPropsType<T>) => {
  const mappedData = customSelectData.map(mapDataToSelect);

  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (handleSelectId) {
      handleSelectId(event.target.value);
    }
  };

  return (
    <div className={styles.div}>
      <h3>{title}</h3>
      <div className="form-floating">
        <select
          className="form-select bg-dark text-white"
          id="floatingSelectGrid"
          onChange={handlerSelect}
        >
          <option>{selectTitle}</option>
          {!customSelectData || customSelectData.length === 0 ? (
            <h1>Ooops, server error, please wait...</h1>
          ) : (
            mappedData.map((item) => (
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
