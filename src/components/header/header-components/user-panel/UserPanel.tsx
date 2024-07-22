import { FC } from "react";
import { useAppSelector } from "../../../../features/redux/hooks/reduxRootHooks";
import classNames from "classnames";

import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";
import OfflineIcon from "../../../../assets/icons/OfflineIcon.svg";

import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CutomModalWindowType3 from "../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type3/CutomModalWindowType3";
import styles from "./user_panel.module.scss";

export interface DropListItemTypes {
  id: number;
  url: string;
  icon: string;
  text: string;
}

export interface ShiftDataTypes {
  generalSales: string;
  cash: string;
  bankCard: string;
  refunds: string;
}

export interface DropDataTypes {
  shiftData: ShiftDataTypes;
  dropListItem: DropListItemTypes[];
}

export interface UserPanelDataTypes {
  id: number;
  avatar: string;
  name: string;
  dropData: DropDataTypes;
}

export interface UserPanelDataPropsTypes {
  userPanelData: UserPanelDataTypes;
}

const UserPanel: FC<UserPanelDataPropsTypes> = ({ userPanelData }) => {
  const isShiftStatus = useAppSelector(
    (state) => state.toggle["isShiftStatus"]
  );

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
              <img src={!isShiftStatus ? OfflineIcon : OnlineIcon} />
              <p>{!isShiftStatus ? "Не на смене" : "На смене"}</p>
            </div>
          </div>
        </button>
        <div className={classNames("dropdown-menu", styles.dropdown_list)}>
          <div className={styles.dropdown_list_header}>
            <div>
              <img src={!isShiftStatus ? OfflineIcon : OnlineIcon} />
              <p>{!isShiftStatus ? "Смена закрыта" : "Смена открыта "}</p>
            </div>
            <CustomCenterModalOpenWrapper
              redaxStateKey="isUserPanelOpenShiftModalOpen"
              openComponents={() => (
                <CutomModalWindowType3
                  redaxStateKey="isUserPanelOpenShiftModalOpen"
                  redaxShiftState="isShiftStatus"
                  shiftType={isShiftStatus}
                  title={!isShiftStatus ? "Открытие смены" : "Закрытие смены "}
                  rightButton={
                    !isShiftStatus ? "Открыть смену" : "Закрыть смену"
                  }
                />
              )}
            >
              <button
                className={classNames({
                  [styles._active_shift]: isShiftStatus,
                  [styles._disactive_shift]: !isShiftStatus,
                })}
              >
                <p>{!isShiftStatus ? "Открыть смену" : "Закрыть смену"}</p>
              </button>
            </CustomCenterModalOpenWrapper>
          </div>
          {isShiftStatus && (
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
