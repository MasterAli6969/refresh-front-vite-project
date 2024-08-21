import { FC, useMemo } from "react";

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
            <tr key={transaction.id}>
              <td>{transaction.dateAndTime}</td>
              <td>{transaction.employee}</td>
              <td>{transaction.userLogin}</td>
              <td>{transaction.paymentMethod}</td>
              <td>₽ {transaction.amount}</td>
              <td>{transaction.transactionDetails} позиции</td>
              <td>ID: {transaction.transactionID}</td>
              <td>{transaction.transactionStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
