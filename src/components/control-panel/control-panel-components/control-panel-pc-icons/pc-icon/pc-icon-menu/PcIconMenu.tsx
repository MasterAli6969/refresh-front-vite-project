import { FC } from "react";
import { ListType } from "../../../../../../commonTypes.interface";
//МОДУЛИ ДЛЯ РАБОТЫ
import CustomMenuRightOpenWrapper from "../../../../../../common/smart-component/custom-menu-right-open-wrapper/CustomMenuRightOpenWrapper";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
//ИКОНКИ
import UserMiniIcon from "../../../../../../assets/icons/UserMiniIcon.svg";
import RemoteSvgrepoMini from "../../../../../../assets/icons/RemoteSvgrepoMini.svg";
import ServiceIconMini from "../../../../../../assets/icons/ServiceIconMini.svg";
import EditIconMini from "../../../../../../assets/icons/EditIconMini.svg";
import PowerIconMini from "../../../../../../assets/icons/PowerIconMini.svg";
import ArrowChekRight from "../../../../../../assets/icons-svg-components/ArrowChekRight";

import { EditingMenu, ManagementMenu, PowerMenu } from "./drop-menus/DropMenus";

import styles from "./pc_icon_menu.module.scss";
import ReplenishmentBalanceModalWindows from "../../../../../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";
import UserPenaltyModalWindow from "./pc-icon-menu-modal-windows/user-penalty-modal-window/UserPenaltyModalWindow";
import SendMessageModalWindow from "./pc-icon-menu-modal-windows/send-message-modal-window/SendMessageModalWindow";
import EndSessionModalWindow from "./pc-icon-menu-modal-windows/end-session-modal-window/EndSessionModalWindow";
import ChangeLocationModalWindow from "./pc-icon-menu-modal-windows/change-location-modal-window/ChangeLocationModalWindow";
import GuestSessionModalWindow from "./pc-icon-menu-modal-windows/guest-session-modal-window/GuestSessionModalWindow";
import AddTimeModalWindow from "./pc-icon-menu-modal-windows/add-time-modal-window/AddTimeModalWindow";

export interface DropDataObjectType {
  client: string;
  timeLeft: string;
  dropDataItem: ListType[];
}

// Тип для pcIconModalWindowData
export interface PcIconMenuDataType {
  dropData?: DropDataObjectType;
  modalListItem: ListType[];
}

export interface PcIconMenuPropsData {
  pcIconModalWindowData: PcIconMenuDataType;
  pcStatus: string;
}

const PcIconMenu: FC<PcIconMenuPropsData> = ({
  pcIconModalWindowData,
  pcStatus,
}) => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        {pcStatus === "ActiveMode" && (
          <div className={styles.drop_menu}>
            <div className="btn-group dropend">
              <div data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <p>
                    Клиент:
                    <span>{pcIconModalWindowData.dropData?.client}</span>
                  </p>
                  <p>
                    Осталось:
                    <span>{pcIconModalWindowData.dropData?.timeLeft}</span>
                  </p>
                </div>
                <ArrowChekRight color="#ffff" />
              </div>
              <ul className="dropdown-menu">
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="replenishmentBalanceModalWindow"
                    openComponents={() => (
                      <ReplenishmentBalanceModalWindows redaxStateKey="replenishmentBalanceModalWindow" />
                    )}
                  >
                    Пополнение
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="addTimeModalWindow"
                    openComponents={() => (
                      <AddTimeModalWindow redaxStateKey="addTimeModalWindow" />
                    )}
                  >
                    Добавить время
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="userPenaltyModalWindow"
                    openComponents={() => (
                      <UserPenaltyModalWindow redaxStateKey="userPenaltyModalWindow" />
                    )}
                  >
                    Штраф
                  </CustomCenterModalOpenWrapper>
                </li>

                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="sendMessageModalWindow"
                    openComponents={() => (
                      <SendMessageModalWindow redaxStateKey="sendMessageModalWindow" />
                    )}
                  >
                    Отправить сообщение
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="endSessionModalWindow"
                    openComponents={() => (
                      <EndSessionModalWindow redaxStateKey="endSessionModalWindow" />
                    )}
                  >
                    Завершить сессию
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="changeLocationModalWindow"
                    openComponents={() => (
                      <ChangeLocationModalWindow redaxStateKey="changeLocationModalWindow" />
                    )}
                  >
                    Сменить место
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>Профиль клиента</li>
                <li>История транзакций</li>
              </ul>
            </div>
          </div>
        )}
        <div className={styles.pc_title}>
          <p>Устройство: PC9</p>
        </div>
        <ul>
          <li>
            <CustomCenterModalOpenWrapper
              redaxStateKey={`guestSessionModalWindow${pcStatus}`}
              openComponents={() => (
                <GuestSessionModalWindow
                  redaxStateKey={`guestSessionModalWindow${pcStatus}`}
                />
              )}
            >
              <div>
                <img src={UserMiniIcon} />
                <p>Гостевой сеанс</p>
              </div>
            </CustomCenterModalOpenWrapper>
          </li>
          <li>
            <CustomMenuRightOpenWrapper openMenu={() => <ManagementMenu />}>
              <div>
                <img src={RemoteSvgrepoMini} />
                <p>Управление</p>
              </div>
              <ArrowChekRight color="#949496" />
            </CustomMenuRightOpenWrapper>
          </li>
          <li>
            <div>
              <img src={ServiceIconMini} />
              <p>Режим ремонта</p>
            </div>
          </li>
          <li>
            <CustomMenuRightOpenWrapper
              positionRight="-7"
              openMenu={() => <EditingMenu />}
            >
              <div>
                <img src={EditIconMini} />
                <p>Редактирование</p>
              </div>
              <ArrowChekRight color="#949496" />
            </CustomMenuRightOpenWrapper>
          </li>
          <li>
            <CustomMenuRightOpenWrapper
              positionRight="-7"
              openMenu={() => <PowerMenu />}
            >
              <div>
                <img src={PowerIconMini} />
                <p>Питание</p>
              </div>
              <ArrowChekRight color="#949496" />
            </CustomMenuRightOpenWrapper>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PcIconMenu;
