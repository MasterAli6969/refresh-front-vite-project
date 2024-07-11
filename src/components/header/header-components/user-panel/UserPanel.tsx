import { FC } from "react";
import classNames from "classnames";

import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";

import {
  UserPanelDataPropsTypes,
  DropListItemTypes,
} from "./userPanel.interface";

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
            <div>
              <img src={OnlineIcon} />
              <p>Не на смене</p>
            </div>
          </div>
        </button>
        <div className={classNames("dropdown-menu", styles.dropdown_list)}>
          <div>
            <div></div>
            <button></button>
          </div>
          <div>
            <ul>
              <li></li>
            </ul>
          </div>
          <ul>
            {!userPanelData.dropData.dropListItem ||
            userPanelData.dropData.dropListItem.length === 0 ? (
              <h1>Ooops, server error, please wait...</h1>
            ) : (
              userPanelData.dropData.dropListItem.map(
                (item: DropListItemTypes) => (
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
                )
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
