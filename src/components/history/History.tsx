import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomSearchInput from "../../common/static-components/inputs/custom-search-input/CustomSearchInput";
import HistoryItem from "./history-components/history-item/HistoryItem";
import HistoryFilterButton from "./history-components/history-filter-button/HistoryFilterButton";
//СТИЛИ
import styles from "./history.module.scss";

const History: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <CustomSearchInput customWidth="97%" placeholder="Логин пользователя" />
        <HistoryFilterButton />
      </div>
      <div>
        <HistoryItem />
      </div>
    </div>
  );
};

export default History;
