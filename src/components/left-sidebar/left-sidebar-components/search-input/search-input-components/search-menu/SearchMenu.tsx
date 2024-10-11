import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { ListType } from "../../../../../../commonTypes.interface";
import { searchMenuData } from "../../data";
//МОДУЛИ ДЛЯ РЕНДЕРА
import ArrowChekRight from "../../../../../../assets/icons-svg-components/ArrowChekRight";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import ReplenishmentBalanceModalWindows from "../../../../../../common/special-componet/replenishment-balance-modal-windows/ReplenishmentBalanceModalWindows";
//СТИЛИ
import styles from "./search_menu.module.scss";
import CustomContexMenuOpenUniversalWrapper from "../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";

export interface SearchMenuDataType {
  id: number;
  name: string;
  paymentAmount: string;
  timeLeft: string;
  hoverSubMenuItem: ListType[];
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
        <div className={styles.div}>
          {inputState === "" ? (
            <div className={styles.subdiv_start}>
              <h5>Начните ввод...</h5>
            </div>
          ) : !filteredUsers || filteredUsers.length === 0 ? (
            <div className={styles.subdiv_none}>
              <h5>Ничего не найдено {"=("} </h5>
            </div>
          ) : (
            filteredUsers.map((item: SearchMenuDataType) => {
              return (
                <div key={item.id}>
                  <CustomContexMenuOpenUniversalWrapper
                    dropPosition="right"
                    dropMenuItems={[
                      () => <h4>Профиль клиента</h4>,
                      () => (
                        <CustomCenterModalOpenWrapper
                          redaxStateKey="replenishmentBalanceModalWindow"
                          openComponents={() => (
                            <ReplenishmentBalanceModalWindows redaxStateKey="replenishmentBalanceModalWindow" />
                          )}
                        >
                          <h4>Пополнение</h4>
                        </CustomCenterModalOpenWrapper>
                      ),
                      () => <h4>Перейти к покупкам</h4>,
                      () => <h4>Сбросить пароль на email</h4>,
                    ]}
                  >
                    <h5>{item.name}</h5>
                    <div>
                      <ArrowChekRight color="#FEFEFE" />
                    </div>
                  </CustomContexMenuOpenUniversalWrapper>
                </div>
              );
            })
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchMenu;
