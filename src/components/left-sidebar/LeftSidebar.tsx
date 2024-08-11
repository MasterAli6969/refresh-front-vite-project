// 1. Импорты из библиотек React и других внешних библиотек
import { FC, useState, useEffect } from "react";
import classNames from "classnames";
import { PropsIcon } from "../../assets/icons-svg-components/props.interface";
import { ListLinkType } from "../../commonTypes.interface";

import ArrowChekRight from "../../assets/icons-svg-components/ArrowChekRight";
import CustomLogo from "../../common/static-components/custom-logo/CustomLogo";

import LeftDropList from "./left-sidebar-components/left-drop-list/LeftDropList";
import {
  leftSidebarData,
  leftDropListStaticData,
  leftDropListDropData,
} from "./data";

import styles from "./left_sidebar.module.scss";

export interface leftSidebarDataType {
  id: number;
  url: string;
  icon: FC<PropsIcon>;
  text: string;
}

export interface LeftDropListStaticDataType extends ListLinkType {}

export interface LeftDropListDropMenuDataType {
  id: number;
  title: string;
  customListDropItem?: ListLinkType[];
  url?: string;
}

export interface LeftDropListDataProps {
  leftDropListStaticData?: LeftDropListStaticDataType[];
  leftDropListDropData?: LeftDropListDropMenuDataType[];
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
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className={classNames(styles.main_list, {
                  [styles.active]: activeItemId === item.id,
                })}
                onClick={() => handleLiClick(item.id)}
              >
                <a href={item.url}>
                  <div>
                    <div>
                      <Icon
                        color={activeItemId === item.id ? "#3e90f0" : "#6c7275"}
                      />
                    </div>
                    {item.text}
                  </div>
                  {(item.id === 7 || item.id === 9) && (
                    <div>
                      <ArrowChekRight color="#6C7275" />
                    </div>
                  )}
                </a>
              </li>
            );
          })
        )}
        {activeItemId === 7 && (
          <li className={styles.right_list}>
            <LeftDropList leftDropListStaticData={leftDropListStaticData} />
          </li>
        )}
        {activeItemId === 9 && (
          <li className={styles.right_list}>
            <LeftDropList leftDropListDropData={leftDropListDropData} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default LeftSidebar;
