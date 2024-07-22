import { FC } from "react";

import ArrowChekRight from "../../../../assets/icons-svg-components/ArrowChekRight";

import {
  LeftDropListDropMenuDataType,
  LeftDropListDataProps,
  LeftDropListStaticDataType,
} from "../../LeftSidebar";

import { ListLinkType } from "../../../../commonTypes.interface";

import styles from "./custom_list.module.scss";

const LeftDropList: FC<LeftDropListDataProps> = ({
  leftDropListStaticData,
  leftDropListDropData,
}) => {
  console.log("Статические данные", leftDropListStaticData);
  console.log("Динамические данные", leftDropListDropData);

  return (
    <ul className={styles.ul}>
      {leftDropListStaticData &&
        leftDropListStaticData.length != 0 &&
        leftDropListStaticData.map((item: LeftDropListStaticDataType) => {
          return (
            <li key={item.id} className={styles.li_statik}>
              <a href={item.url}>
                <h4>{item.title}</h4>
              </a>
            </li>
          );
        })}
      {leftDropListDropData &&
        leftDropListDropData.length != 0 &&
        leftDropListDropData.map((item: LeftDropListDropMenuDataType) => {
          return (
            <li key={item.id} className={styles.li_dropdown}>
              {!item.customListDropItem ||
              item.customListDropItem.length === 0 ? (
                <a href={item.url}>
                  <h4>{item.title}</h4>
                </a>
              ) : (
                <>
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target={`#multiCollapseExample${item.id}`}
                    aria-expanded="false"
                    aria-controls={`multiCollapseExample${item.id}`}
                  >
                    <h4>{item.title}</h4>
                    <ArrowChekRight color="#6C7275" />
                  </button>
                  <ul
                    className="collapse multi-collapse"
                    id={`multiCollapseExample${item.id}`}
                  >
                    {item.customListDropItem.map((subItem: ListLinkType) => {
                      return (
                        <li key={subItem.id}>
                          <a href={subItem.url}>
                            <h4>{subItem.title}</h4>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default LeftDropList;
