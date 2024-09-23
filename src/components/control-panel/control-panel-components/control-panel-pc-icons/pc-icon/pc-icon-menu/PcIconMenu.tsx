import { FC } from "react";
//ИКОНКИ
import UserMiniIcon from "../../../../../../assets/icons/UserMiniIcon.svg";
import RemoteSvgrepoMini from "../../../../../../assets/icons/RemoteSvgrepoMini.svg";
import ServiceIconMini from "../../../../../../assets/icons/ServiceIconMini.svg";
import EditIconMini from "../../../../../../assets/icons/EditIconMini.svg";
import PowerIconMini from "../../../../../../assets/icons/PowerIconMini.svg";
import ArrowChekRight from "../../../../../../assets/icons-svg-components/ArrowChekRight";
//МОДУЛИ ДЛЯ РАБОТЫ
import { ListType } from "../../../../../../commonTypes.interface";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import ReplenishmentBalanceModalWindows from "../../../../../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";
import UserPenaltyModalWindow from "./pc-icon-menu-modal-windows/user-penalty-modal-window/UserPenaltyModalWindow";
import SendMessageModalWindow from "./pc-icon-menu-modal-windows/send-message-modal-window/SendMessageModalWindow";
import EndSessionModalWindow from "./pc-icon-menu-modal-windows/end-session-modal-window/EndSessionModalWindow";
import ChangeLocationModalWindow from "./pc-icon-menu-modal-windows/change-location-modal-window/ChangeLocationModalWindow";
import GuestSessionModalWindow from "./pc-icon-menu-modal-windows/guest-session-modal-window/GuestSessionModalWindow";
import AddTimeModalWindow from "./pc-icon-menu-modal-windows/add-time-modal-window/AddTimeModalWindow";
import CustomContexMenuOpenUniversalWrapper from "../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import RelocatePcModalWindow from "./pc-icon-menu-modal-windows/relocate-pc-modal-window/RelocatePcModalWindow";
//СТИЛИ
import styles from "./pc_icon_menu.module.scss";
import CustomDynamicList from "../../../../../../common/smart-component/custom-dynamic-list/CustomDynamicList";

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
          <div className={styles.subdiv_active_mode}>
            <CustomContexMenuOpenUniversalWrapper
              dropPosition="right"
              dropMenuItems={[
                () => (
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="replenishmentBalanceModalWindow"
                    openComponents={() => (
                      <ReplenishmentBalanceModalWindows redaxStateKey="replenishmentBalanceModalWindow" />
                    )}
                  >
                    <p>Пополнение</p>
                  </CustomCenterModalOpenWrapper>
                ),
                () => (
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="addTimeModalWindow"
                    openComponents={() => (
                      <AddTimeModalWindow redaxStateKey="addTimeModalWindow" />
                    )}
                  >
                    <p>Добавить время</p>
                  </CustomCenterModalOpenWrapper>
                ),
                () => (
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="userPenaltyModalWindow"
                    openComponents={() => (
                      <UserPenaltyModalWindow redaxStateKey="userPenaltyModalWindow" />
                    )}
                  >
                    <p>Штраф</p>
                  </CustomCenterModalOpenWrapper>
                ),
                () => (
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="sendMessageModalWindow"
                    openComponents={() => (
                      <SendMessageModalWindow redaxStateKey="sendMessageModalWindow" />
                    )}
                  >
                    <p>Отправить сообщение</p>
                  </CustomCenterModalOpenWrapper>
                ),
                () => (
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="endSessionModalWindow"
                    openComponents={() => (
                      <EndSessionModalWindow redaxStateKey="endSessionModalWindow" />
                    )}
                  >
                    <p>Завершить сессию</p>
                  </CustomCenterModalOpenWrapper>
                ),
                () => (
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="changeLocationModalWindow"
                    openComponents={() => (
                      <ChangeLocationModalWindow redaxStateKey="changeLocationModalWindow" />
                    )}
                  >
                    <p>Сменить место</p>
                  </CustomCenterModalOpenWrapper>
                ),
                () => <p>Профиль клиента</p>,
                () => <p>История транзакций</p>,
              ]}
            >
              <div className={styles.active_mode_header}>
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
            </CustomContexMenuOpenUniversalWrapper>
          </div>
        )}

        <div className={styles.pc_icon_menu_item}>
          <p>Устройство: PC9</p>
        </div>
        <div>
          <div>
            <CustomCenterModalOpenWrapper
              redaxStateKey={`guestSessionModalWindow${pcStatus}`}
              openComponents={() => (
                <GuestSessionModalWindow
                  redaxStateKey={`guestSessionModalWindow${pcStatus}`}
                />
              )}
            >
              <div className={styles.pc_icon_menu_item}>
                <div>
                  <img src={UserMiniIcon} />
                  <p>Гостевой сеанс</p>
                </div>
              </div>
            </CustomCenterModalOpenWrapper>
          </div>
          <div>
            <CustomContexMenuOpenUniversalWrapper
              dropPosition="right"
              dropMenuItems={[
                () => <p>Удаленный контроль</p>,
                () => <p>Проводник Win</p>,
                () => <p>Запуск диспетчера</p>,
              ]}
            >
              <div className={styles.pc_icon_menu_item}>
                <div>
                  <img src={RemoteSvgrepoMini} />
                  <p>Управление</p>
                </div>
                <ArrowChekRight color="#949496" />
              </div>
            </CustomContexMenuOpenUniversalWrapper>
          </div>
          <div className={styles.pc_icon_menu_item}>
            <div>
              <img src={ServiceIconMini} />
              <p>Режим ремонта</p>
            </div>
          </div>
          <div>
            <CustomContexMenuOpenUniversalWrapper
              dropPosition="right"
              dropMenuItems={[
                () => (
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="relocatePcModalWindow"
                    openComponents={() => (
                      <RelocatePcModalWindow redaxStateKey="relocatePcModalWindow" />
                    )}
                  >
                    <p>Переместить</p>
                  </CustomCenterModalOpenWrapper>
                ),
                () => <p>Удалить</p>,
              ]}
            >
              <div className={styles.pc_icon_menu_item}>
                <div>
                  <img src={EditIconMini} />
                  <p>Редактирование</p>
                </div>
                <ArrowChekRight color="#949496" />
              </div>
            </CustomContexMenuOpenUniversalWrapper>
          </div>
          <div>
            <CustomContexMenuOpenUniversalWrapper
              dropPosition="right"
              dropMenuItems={[
                () => <p>Выключить</p>,
                () => <p>Перезагрузить</p>,
              ]}
            >
              <div className={styles.pc_icon_menu_item}>
                <div>
                  <img src={PowerIconMini} />
                  <p>Питание</p>
                </div>
                <ArrowChekRight color="#949496" />
              </div>
            </CustomContexMenuOpenUniversalWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcIconMenu;
