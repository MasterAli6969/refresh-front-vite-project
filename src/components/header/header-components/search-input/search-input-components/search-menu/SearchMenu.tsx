import { FC } from "react";
import { ListLinkType } from "../../../../../../commonTypes.interface";

import ClockTimeIcon from "../../../../../../assets/icons/ClockTimeIcon.svg";
import ArrowChekRight from "../../../../../../assets/icons-svg-components/ArrowChekRight";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import ReplenishmentBalanceModalWindows from "../../../../../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";

import { searchMenuData } from "../../data";

import styles from "./search_menu.module.scss";

export interface SearchMenuDataType {
  id: number;
  name: string;
  paymentAmount: string;
  timeLeft: string;
  hoverSubMenuItem: ListLinkType[];
}

export interface SearchMenuPropsType {
  inputState: string;
  focused: boolean;
}

const SearchMenu: FC<SearchMenuPropsType> = ({ focused, inputState }) => {
  const filteredUsers = searchMenuData.filter((user) =>
    user.name.toLowerCase().includes(inputState.toLowerCase())
  );
  return (
    <>
      {focused ? (
        <ul className={styles.ul}>
          {inputState === "" ? (
            <li>
              <p>Впишите логин поиска</p>
            </li>
          ) : !filteredUsers || filteredUsers.length === 0 ? (
            <div>
              <p>Что-то не так... </p>
              <p>Мы не смогли найти этого пользователя в базе данных центра.</p>
              <p>
                Попробуйте воспользоваться <a href="#"> расширенным поиском.</a>
              </p>
            </div>
          ) : (
            filteredUsers.map((item: SearchMenuDataType) => {
              return (
                <li key={item.id}>
                  <p>{item.name}</p>
                  <div>
                    <p>₽</p>
                    <p>{item.paymentAmount}</p>
                  </div>
                  <div>
                    <img src={ClockTimeIcon} />
                    <p>{item.timeLeft}</p>
                  </div>
                  <div>
                    <ArrowChekRight color="#FEFEFE" />
                  </div>
                  <div className={styles.hover_submenu}>
                    <ul>
                      <li>
                        <CustomCenterModalOpenWrapper
                          redaxStateKey="isReplenishmentBalanceModalWindowsOpen"
                          openComponents={() => (
                            <ReplenishmentBalanceModalWindows redaxStateKey="isReplenishmentBalanceModalWindowsOpen" />
                          )}
                        >
                          <p>Профиль клиента</p>
                        </CustomCenterModalOpenWrapper>
                      </li>
                      <li>
                        <p>Пополнение баланса</p>
                      </li>
                      <li>
                        <p>Перейти к покупкам</p>
                      </li>
                      <li>
                        <p>Сбросить пароль на email</p>
                      </li>
                    </ul>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchMenu;
