import { FC, useMemo, useState } from "react";
import InfoIconSmall from "../../assets/icons/InfoIconSmall.svg";
import { transactionsTestData } from "./data";
import styles from "./transactions.module.scss";

interface TransactionDataTypes {
  id: number;
  dateAndTime: string;
  employee: string;
  userLogin: string;
  paymentMethod: string;
  amount: number;
  transactionDetails: number;
  transactionID: string;
  transactionStatus: string;
}

const Transactions: FC = () => {
  const transactionsData = useMemo(() => transactionsTestData, []);

  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleBarClick = (
    event: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    if (activeItemId === id) {
      setActiveItemId(null);
    } else {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({
        top: rect.top + window.scrollY + event.clientY - rect.top,
        left: rect.left + window.scrollX + event.clientX - rect.left,
      });
      setActiveItemId(id);
    }
  };

  return (
    <div className={styles.div}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Дата и время</th>
            <th>Сотрудник</th>
            <th>Логин пользователя</th>
            <th>Способ оплаты</th>
            <th>Сумма</th>
            <th>Детали транзакции</th>
            <th>ID транзакции</th>
            <th>Статус операции</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {transactionsData.map((transaction: TransactionDataTypes) => (
            <tr
              key={transaction.id}
              onClick={(event) => handleBarClick(event, transaction.id)}
            >
              <td>{transaction.dateAndTime}</td>
              <td>{transaction.employee}</td>
              <td>{transaction.userLogin}</td>
              <td>{transaction.paymentMethod}</td>
              <td>₽ {transaction.amount}</td>
              <td className={styles.transactionDetails}>
                {transaction.transactionDetails} позиции
                <img src={InfoIconSmall} alt="Info" />
                <ul>
                  <li>GOG 1</li>
                  <li>GOG 2</li>
                </ul>
              </td>
              <td>ID: {transaction.transactionID}</td>
              <td>{transaction.transactionStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {activeItemId !== null && menuPosition && (
        <ul
          className={styles.menu}
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
          }}
        >
          <li>Повторная печать</li>
          <li>Возврат</li>
        </ul>
      )}
    </div>
  );
};

export default Transactions;
