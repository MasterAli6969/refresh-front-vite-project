import { FC } from "react";
import { ListLinkType } from "../../../../../commonTypes.interface";
//ИКОНКИ
import UserPenaltyModalWindow from "./pc-icon-menu-modal-windows/user-penalty-modal-window/UserPenaltyModalWindow";
import UserMiniIcon from "../../../../../assets/icons/UserMiniIcon.svg";
import LoaderMiniIcon from "../../../../../assets/icons/LoaderMiniIcon.svg";
import RemoteSvgrepoMini from "../../../../../assets/icons/RemoteSvgrepoMini.svg";
import CornersOutMiniIcons from "../../../../../assets/icons/CornersOutMiniIcons.svg";
import WindowsLogoMiniIcons from "../../../../../assets/icons/WindowsLogoMiniIcons.svg";
import WrenchMiniIcons from "../../../../../assets/icons/WrenchMiniIcons.svg";
import ListMiniIcons from "../../../../../assets/icons/ListMiniIcons.svg";
import PencilSimpleMiniIcons from "../../../../../assets/icons/PencilSimpleMiniIcons.svg";
//МОДАЛЬНЫЕ ОКНА
import ArrowChekRight from "../../../../../assets/icons-svg-components/ArrowChekRight";
import ReplenishmentBalanceModalWindows from "../../../../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";
import CustomCenterModalOpenWrapper from "../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import ChangeLocationModalWindow from "./pc-icon-menu-modal-windows/change-location-modal-window/ChangeLocationModalWindow";
import CutomModalWindowType2 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type2/CutomModalWindowType2";
import EditPcModalWindow from "./pc-icon-menu-modal-windows/edit-pc-modal-window/EditPcModalWindow";
import ScreenshotSavedModalWindows from "./pc-icon-menu-modal-windows/screenshot-saved-modal-windows/ScreenshotSavedModalWindows";

import styles from "./pc_icon_menu.module.scss";

export interface DropDataObjectType {
  client: string;
  timeLeft: string;
  dropDataItem: ListLinkType[];
}

// Тип для pcIconModalWindowData
export interface PcIconMenuDataType {
  dropData?: DropDataObjectType;
  modalListItem: ListLinkType[];
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
        {pcStatus === "Active" && (
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
                    redaxStateKey="isReplenishmentBalanceModalWindowsOpen"
                    openComponents={() => (
                      <ReplenishmentBalanceModalWindows redaxStateKey="isReplenishmentBalanceModalWindowsOpen" />
                    )}
                  >
                    Пополнение
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="isUserPenaltyModalWindowOpen"
                    openComponents={() => (
                      <UserPenaltyModalWindow redaxStateKey="isUserPenaltyModalWindowOpen" />
                    )}
                  >
                    Штраф
                  </CustomCenterModalOpenWrapper>
                </li>

                <li>Отправить сообщение</li>
                <li>Отправить уведомление</li>
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="isChangeLocationModalWindowOpen"
                    openComponents={() => (
                      <ChangeLocationModalWindow redaxStateKey="isChangeLocationModalWindowOpen" />
                    )}
                  >
                    Сменить место
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>
                  <CustomCenterModalOpenWrapper
                    redaxStateKey="isExitSessionWindowOpen"
                    openComponents={() => (
                      <CutomModalWindowType2
                        redaxStateKey="isExitSessionWindowOpen"
                        title="Выйти из сессии пользователя"
                        specialText="GG.August"
                        rightButton="Выход"
                      />
                    )}
                  >
                    Выйти из сессии
                  </CustomCenterModalOpenWrapper>
                </li>
                <li>Тарифы клиента</li>
                <li>История операций</li>
                <li>История транзакций</li>
              </ul>
            </div>
          </div>
        )}
        <ul>
          <li>
            <img src={UserMiniIcon} />
            <p>Удаленный доступ</p>
          </li>
          <li>
            <CustomCenterModalOpenWrapper
              redaxStateKey="isScreenshotSavedModalWindowsOpen"
              openComponents={() => (
                <ScreenshotSavedModalWindows redaxStateKey="isScreenshotSavedModalWindowsOpen" />
              )}
            >
              <img src={LoaderMiniIcon} />
              <p>Скриншот</p>
            </CustomCenterModalOpenWrapper>
          </li>
          <li>
            <CustomCenterModalOpenWrapper
              redaxStateKey="isAdministratorModeWindowOpen"
              openComponents={() => (
                <CutomModalWindowType2
                  redaxStateKey="isAdministratorModeWindowOpen"
                  title="Перевести ПК в режим администратора?"
                  rightButton="Готово"
                />
              )}
            >
              <img src={RemoteSvgrepoMini} />
              <p>Доступ администратора</p>
            </CustomCenterModalOpenWrapper>
          </li>
          <li>
            <CustomCenterModalOpenWrapper
              redaxStateKey="isMaintenanceMode"
              openComponents={() => (
                <CutomModalWindowType2
                  redaxStateKey="isMaintenanceMode"
                  title="Перевести ПК в режим обслуживания?"
                  rightButton="Готово"
                />
              )}
            >
              <img src={CornersOutMiniIcons} />
              <p>Режим обслуживания</p>
            </CustomCenterModalOpenWrapper>
          </li>
          <li>
            <CustomCenterModalOpenWrapper
              redaxStateKey="isTaskManager"
              openComponents={() => (
                <CutomModalWindowType2
                  redaxStateKey="isTaskManager"
                  title="Открыть диспетчер задач у клиента?"
                  rightButton="Готово"
                />
              )}
            >
              <img src={WindowsLogoMiniIcons} />
              <p>Диспетчер задач</p>
            </CustomCenterModalOpenWrapper>
          </li>
          <li>
            <CustomCenterModalOpenWrapper
              redaxStateKey="isEditPcModalWindowOpen"
              openComponents={() => (
                <EditPcModalWindow redaxStateKey="isEditPcModalWindowOpen" />
              )}
            >
              <img src={WrenchMiniIcons} />
              <p>Редактирование</p>
            </CustomCenterModalOpenWrapper>
          </li>

          <li>
            <img src={ListMiniIcons} />
            <p>Перезагрузка</p>
          </li>
          <li>
            <img src={PencilSimpleMiniIcons} />
            <p>Выключение</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PcIconMenu;
