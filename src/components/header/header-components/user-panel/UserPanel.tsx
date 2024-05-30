import { FC } from "react";
import classNames from "classnames";
import {
  UserPanelDataPropsTypes,
  HeaderDropDataTypes,
} from "../../header.interface";
import styles from "./user_panel.module.scss";

const UserPanel: FC<UserPanelDataPropsTypes> = ({ userPanelData }) => {
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
            <h1>{userPanelData.avatar}</h1>
          </div>
          <div>
            <h3>{userPanelData.name}</h3>
            <p>{userPanelData.position}</p>
          </div>
        </button>
        <ul className={classNames("dropdown-menu", styles.dropdown_list)}>
          {!userPanelData.dropData || userPanelData.dropData.length === 0 ? (
            <h1>Ooops, server error, please wait...</h1>
          ) : (
            userPanelData.dropData.map((item: HeaderDropDataTypes) => (
              <li key={item.id}>
                <a className="" href={item.url}>
                  <img
                    src={item.icon}
                    alt={item.text}
                    className={styles.icon}
                  />
                  {item.text}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserPanel;
