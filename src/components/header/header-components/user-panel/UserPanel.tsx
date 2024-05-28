import { FC } from "react";
import classNames from "classnames";
import styles from "./user_panel.module.scss";

const UserPanel: FC = () => {
  return (
    <div className={styles.div}>
      <div className="dropdown">
        <button
          className={classNames("btn dropdown-toggle", styles.dropbutton)}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div className={styles.avatar}>
            <h1>AL</h1>
          </div>
          <div>
            <h3>Алексей Лариков</h3>
            <p>Управляющий</p>
          </div>
        </button>
        <ul className={classNames("dropdown-menu", styles.dropdown_list)}>
          <li>
            <a className="" href="#">
              Action
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserPanel;
