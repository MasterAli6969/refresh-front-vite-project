import { FC } from "react";
import classNames from "classnames";

import ArrowChekRight from "../../../../../assets/icons-svg-components/ArrowChekRight";
import ReplenishmentBalanceModalWindows from "../../../../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";
import UserPenaltyModalWindow from "./pc-icon-menu-modal-windows/user-penalty-modal-window/UserPenaltyModalWindow";

import { PcIconMenuPropsData } from "./pcIconMenu.interface";

import styles from "./pc_icon_menu.module.scss";
import CustomCenterModalOpenWrapper from "../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";

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
                <CustomCenterModalOpenWrapper
                  redaxStateKey="isReplenishmentBalanceModalWindowsOpen"
                  openComponents={() => (
                    <ReplenishmentBalanceModalWindows redaxStateKey="isReplenishmentBalanceModalWindowsOpen" />
                  )}
                >
                  <li>Пополнение</li>
                </CustomCenterModalOpenWrapper>
                <CustomCenterModalOpenWrapper
                  redaxStateKey="isUserPenaltyModalWindowOpen"
                  openComponents={() => (
                    <UserPenaltyModalWindow redaxStateKey="isUserPenaltyModalWindowOpen" />
                  )}
                >
                  <li>Штраф</li>
                </CustomCenterModalOpenWrapper>

                <li>Отправить сообщение</li>
                <li>Отправить уведомление</li>
                <li>Сменить место</li>
                <li>Выйти из сессии</li>
                <li>Тарифы клиента</li>
                <li>История операций</li>
                <li>История транзакций</li>
              </ul>
            </div>
          </div>
        )}
        <ul>
          {!pcIconModalWindowData.modalListItem ||
          pcIconModalWindowData.modalListItem.length === 0 ? (
            <h1>Ooops, server error, please wait...</h1>
          ) : (
            pcIconModalWindowData.modalListItem.map((item) => (
              <li
                className={classNames(
                  {
                    [styles._disable]:
                      pcStatus === "Servicing" && item.id !== 5,
                  },
                  {
                    [styles._disable]: pcStatus === "Included" && item.id === 8,
                  },
                  {
                    [styles._disable]:
                      pcStatus === "No Active" &&
                      item.id !== 2 &&
                      item.id !== 6 &&
                      item.id !== 8 &&
                      item.id !== 10,
                  }
                )}
                key={item.id}
              >
                <a href={item.url}>
                  {item.icon && <img src={item.icon} alt={item.title} />}
                  <p>{item.title}</p>
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default PcIconMenu;
