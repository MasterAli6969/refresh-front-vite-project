import { FC } from "react";
//ИКОНКИ
import FilterIcon from "../../assets/icons/FilterIcon.svg";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomSearchInput from "../../common/static-components/inputs/custom-search-input/CustomSearchInput";
//СТИЛИ
import styles from "./history.module.scss";
import CustomButton from "../../common/static-components/buttons/custom-button/CustomButton";

const History: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_header}>
        <CustomSearchInput customWidth="97%" placeholder="Логин пользователя" />
        <CustomButton color="dark">
          <img src={FilterIcon} />
        </CustomButton>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Дата и время</th>
            <th>Источник</th>
            <th>Пользователь</th>
            <th>Компьютер</th>
            <th>Сумма</th>
            <th>Сумма (BP)</th>
            <th>Операция</th>
            <th>Детали операции</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr>
            <td>22.07.2024 23:52:02</td>
            <td>Алексей Подмасков</td>
            <td>silent0fc</td>
            <td>23</td>
            <td>₽ 2 189</td>
            <td>BP 2 189</td>
            <td>Изъятие</td>
            <td>Burn Classic -50шт, Burn Classic -50шт</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default History;
