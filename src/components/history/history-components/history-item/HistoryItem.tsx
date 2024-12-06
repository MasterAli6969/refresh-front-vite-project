import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomButton from "../../../../common/static-components/buttons/custom-button/CustomButton";
//СТИЛИ
import styles from "./history_item.module.scss";

const HistoryItem: FC = () => {
  return (
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
        <tr>
          <td>22.07.2024 23:52:02</td>
          <td>Алексей Подмасков</td>
          <td>silent0fc</td>
          <td>23</td>
          <td>₽ 2 189</td>
          <td>BP 2 189</td>
          <td>Изъятие</td>
          <td>
            <CustomButton color="light">Открыть отчет</CustomButton>
          </td>
        </tr>
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
        <tr>
          <td>22.07.2024 23:52:02</td>
          <td>Алексей Подмасков</td>
          <td>silent0fc</td>
          <td>23</td>
          <td>₽ 2 189</td>
          <td>BP 2 189</td>
          <td>Изъятие</td>
          <td>
            <CustomButton color="light">Открыть отчет</CustomButton>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HistoryItem;
