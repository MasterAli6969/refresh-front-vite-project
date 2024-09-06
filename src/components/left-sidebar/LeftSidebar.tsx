// 1. Импорты из библиотек React и других внешних библиотек

//ТУТ НУЖНО РАЗОБРАТЬ ПОЧЕМУ У НАС НЕ РАБОТАЕТ dropMenuItem И ЕГО rightContextMenuItem НУЖНО РЕОРГАНИЗОВАТЬ ПРОЦЕССЫ РЕНДЕРА

import { FC, useState, useEffect } from "react";
import classNames from "classnames";

import ArrowChekRight from "../../assets/icons-svg-components/ArrowChekRight";
import CustomLogo from "../../common/static-components/custom-logo/CustomLogo";

import { PropsIcon } from "../../assets/icons-svg-components/props.interface";
import { leftSidebarData } from "./data";

import styles from "./left_sidebar.module.scss";
import { ListType } from "../../commonTypes.interface";
import DropListWrapper from "./left-sidebar-components/drop-list-wrapper/DropListWrapper";
import CustomMenuRightOpenWrapper from "../../common/smart-component/custom-menu-right-open-wrapper/CustomMenuRightOpenWrapper";
import CustomStatickList from "../../common/static-components/custom-statick-list/CustomStatickList";

export interface leftSidebarDataType {
  id: number;
  url: string;
  icon: FC<PropsIcon>;
  text: string;
  dropMenuItem?: ListType[];
}

const LeftSidebar: FC = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleLiClick = (itemId: number) => {
    setActiveItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  useEffect(() => {
    if (leftSidebarData.length > 0 && activeItemId === null) {
      setActiveItemId(leftSidebarData[0].id);
    }
  }, [activeItemId]);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_logo}>
        <CustomLogo display="block" />
      </div>
      <ul className={styles.subdiv_list}>
        {!leftSidebarData || leftSidebarData.length === 0 ? (
          <h1>Ooops, server error, please wait...</h1>
        ) : (
          leftSidebarData.map((item: leftSidebarDataType) => {
            return (
              <li
                key={item.id}
                className={classNames(styles.main_list, {
                  [styles.active]: activeItemId === item.id,
                })}
                onClick={() => handleLiClick(item.id)}
              >
                {item.id === 6 || item.id === 8 ? (
                  <DropListWrapper dropMenuRender={item.dropMenuItem}>
                    <h4>{item.text}</h4>
                  </DropListWrapper>
                ) : (
                  <a href={item.url}>
                    <h4>{item.text}</h4>
                  </a>
                )}
              </li>
            );
          })
        )}
      </ul>
      <div>
        <ArrowChekRight color="#6C7275" />
      </div>
    </div>
  );
};

export default LeftSidebar;
