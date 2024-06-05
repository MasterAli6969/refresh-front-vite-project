import { FC } from "react";

import styles from "./custom_notice.module.scss";

const CustomNotice: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <div>
          <h4>PC13</h4>
          <p>22:13</p>
        </div>
        <div>
          <h4>Новый заказ</h4>
          <ul>
            <li>
              <h4>Товар: Чебупелли Сыр</h4>
            </li>
            <li>
              <h4>Количество: 1шт</h4>
            </li>
            <li>
              <h4>Способ доставки: Принести</h4>
            </li>
            <li>
              <h4>Комментарий: Разогреть</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomNotice;
