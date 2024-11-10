import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./reservation.module.scss";

const Reservation: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <h1>Reservation</h1>
      </div>
    </div>
  );
};

export default Reservation;
