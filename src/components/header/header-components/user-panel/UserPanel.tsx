import { FC, useState } from "react";
import classNames from "classnames";

import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";
import OfflineIcon from "../../../../assets/icons/OfflineIcon.svg";

import {
  UserPanelDataPropsTypes,
  DropListItemTypes,
} from "./userPanel.interface";

import styles from "./user_panel.module.scss";

const UserPanel: FC<UserPanelDataPropsTypes> = ({ userPanelData }) => {
  const [shiftStatus, setShiftStatus] = useState<boolean>(false);

  const handleShiftToogle = () => {
    setShiftStatus(!shiftStatus);
  };

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
              <img src={shiftStatus ? OnlineIcon : OfflineIcon} />
              <p>{shiftStatus ? "На смене" : "Не на смене"}</p>
            </div>
          </div>
        </button>
        <div className={classNames("dropdown-menu", styles.dropdown_list)}>
          <div className={styles.dropdown_list_header}>
            <div>
              <img src={shiftStatus ? OnlineIcon : OfflineIcon} />
              <p>{shiftStatus ? "Смена открыта" : "Смена закрыта"}</p>
            </div>
            <button
              className={classNames({
                [styles._active_shift]: shiftStatus,
                [styles._disactive_shift]: !shiftStatus,
              })}
              onClick={handleShiftToogle}
            >
              <p>{shiftStatus ? "Закрыть смену" : "Открыть смену"}</p>
            </button>
          </div>
          {shiftStatus && (
            <div className={styles.dropdown_list_shift_data}>
              <p>Текущая смена</p>
              <ul>
                {userPanelData.dropData.shiftData ? (
                  <>
                    <li>
                      <p>
                        Общие продажи: ₽{" "}
                        {userPanelData.dropData.shiftData.generalSales}
                      </p>
                    </li>
                    <li>
                      <p>Наличные: ₽ {userPanelData.dropData.shiftData.cash}</p>
                    </li>
                    <li>
                      <p>
                        Банковская карта: ₽{" "}
                        {userPanelData.dropData.shiftData.bankCard}
                      </p>
                    </li>
                    <li>
                      <p>
                        Возвраты средств: ₽{" "}
                        {userPanelData.dropData.shiftData.refunds}
                      </p>
                    </li>
                  </>
                ) : (
                  <p>Ooops, server error, please wait...</p>
                )}
              </ul>
              <div>
                <button>X-Отчет</button>
                <button>Расходы кассы </button>
              </div>
            </div>
          )}

          <ul className={styles.dropdown_list_options}>
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
