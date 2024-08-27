import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../features/redux/hooks/reduxRootHooks";

import InfoIconSmall from "../../assets/icons/InfoIconSmall.svg";
import CustomCenterModalOpenWrapper from "../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import ChequeReturn from "./transactions-components/cheque-return-modal-window/ChequeReturn";

import { transactionsTestData } from "./data";
import { SelectPropductType } from "../shop/shop.interface";

import styles from "./transactions.module.scss";
import {
  addNewProduct,
  clearCart,
} from "../../features/redux/reducers/special-reducers/shop-reducers/cartItemsReducer";

interface TransactionDataTypes {
  id: number;
  dateAndTime: string;
  employee: string;
  userLogin: string;
  paymentMethod: string;
  amount: number;
  transactionDetails: number;
  positionsProduct: SelectPropductType[];
  transactionID: string;
  transactionStatus: string;
}

const Transactions: FC = () => {
  const reduxCartItemsReducerStateKey = "transactionsProduct";

  const isModalOpen = useAppSelector(
    (state) =>
      state.toggleDynamic.modalStates["ChequeReturnModalWindow"] ?? false
  );

  const transactionsData = useMemo(() => transactionsTestData, []);

  const dispatch = useAppDispatch();

  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleBarClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>, id: number) => {
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
    },
    [activeItemId]
  );

  const handlePostProductModal = useCallback(() => {
    if (isModalOpen) {
      const positionsProductFind =
        transactionsData.find((item) => item.id === activeItemId)
          ?.positionsProduct || [];
      positionsProductFind.forEach((product) => {
        dispatch(
          addNewProduct({
            key: reduxCartItemsReducerStateKey,
            product: product,
          })
        );
        console.log("открыто ли окно", product);
      });
    } else {
      dispatch(clearCart(reduxCartItemsReducerStateKey));
    }
  }, [activeItemId, dispatch, isModalOpen]);

  useEffect(() => {
    handlePostProductModal();
  }, [handlePostProductModal]);

  // useEffect(() => {
  //   console.log("Текущее значение isModalOpen:", isModalOpen);
  //   if (isModalOpen) {
  //     console.log("Модальное окно открыто");
  //   } else {
  //     console.log("Модальное окно закрыто");
  //   }
  // }, [isModalOpen]);

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
                  {transaction.positionsProduct.map(
                    (item: SelectPropductType) => {
                      return (
                        <li key={item.id}>
                          <p>{item.name}</p>
                          <p>{item.pieceСount}</p>
                          <p>{item.price}</p>
                        </li>
                      );
                    }
                  )}
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
          <li>
            <CustomCenterModalOpenWrapper
              redaxStateKey="ChequeReturnModalWindow"
              openComponents={() => (
                <ChequeReturn
                  redaxStateKey="ChequeReturnModalWindow"
                  title="Возврат чека"
                />
              )}
            >
              Возврат
            </CustomCenterModalOpenWrapper>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Transactions;
