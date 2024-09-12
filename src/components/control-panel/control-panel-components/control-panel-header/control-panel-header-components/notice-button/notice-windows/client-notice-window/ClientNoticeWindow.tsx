import { FC } from "react";

import styles from "./client_notice_window.module.scss";

const ClientNoticeWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <div>
          <p>ПК 13</p>
          <p>22:13</p>
        </div>
        <div>
          <p>Новый заказ</p>
          <ul>
            <li>
              <p>Товар: Чебупелли Сыр</p>
            </li>
            <li>
              <p>Количество: 1шт</p>
            </li>
            <li>
              <p>Способ доставки: Принести</p>
            </li>
            <li>
              <p>Комментарий: Разогреть</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <p>ПК 13</p>
          <p>22:13</p>
        </div>
        <div>
          <p>Новый запрос о помощи</p>
        </div>
      </div>
    </div>
  );
};

export default ClientNoticeWindow;
