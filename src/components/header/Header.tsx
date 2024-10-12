import { FC } from "react";
//МОДУЛИ ДЛЯ РЕНДЕРА
import UserPanel from "./header-components/user-panel/UserPanel";
import ShiftPanel from "./header-components/shift-panel/ShiftPanel";
//ИКОНКИ
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
//СТИЛИ
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_left}>
        <div>
          <img src={CalendarIcon} />
          <div>
            <h4>Вторник</h4>
            <h5>19 июля, 11:00</h5>
          </div>
        </div>
        <div>
          <h3>Панель управления</h3>
        </div>
      </div>
      <div className={styles.subdiv_right}>
        <ShiftPanel />
        <UserPanel />
      </div>
    </div>
  );
};

export default Header;
