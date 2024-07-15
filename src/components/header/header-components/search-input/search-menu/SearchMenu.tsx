import { FC } from "react";

import ClockTimeIcon from "../../../../../assets/icons/ClockTimeIcon.svg";
import ArrowChekRight from "../../../../../assets/icons-svg-components/ArrowChekRight";
import CustomStatickList from "../../../../../common/custom-statick-list/CustomStatickList";

import {
  SearchMenuDataType,
  SearchMenuPropsType,
} from "./searchMenu.interface";
import { searchMenuData } from "../data";

import styles from "./search_menu.module.scss";

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
            <h1>Совпадений не найдено</h1>
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
                    <CustomStatickList
                      customStatickListData={item.hoverSubMenuItem}
                    />
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
