import styles from "./custom_select.module.scss";

export interface CustomSelectDataType {
  id: number | string;
  selectItem: string;
}

export interface CustomSelectPropsType<T> {
  title?: string;
  selectTitle: string;
  customSelectData: T[];
  mapDataToSelect?: (data: T) => CustomSelectDataType; // Сделано необязательным
  handleSelectId?: (key: string | number) => void;
}

const CustomSelect = <T,>({
  title,
  selectTitle,
  customSelectData,
  mapDataToSelect,
  handleSelectId,
}: CustomSelectPropsType<T>) => {
  // Если mapDataToSelect не передан, используем данные напрямую
  const mappedData = mapDataToSelect
    ? customSelectData.map(mapDataToSelect)
    : (customSelectData as unknown as CustomSelectDataType[]); // Приводим тип данных к нужному интерфейсу

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
                <h4>{item.selectItem}</h4>
              </option>
            ))
          )}
        </select>
      </div>
    </div>
  );
};

export default CustomSelect;
