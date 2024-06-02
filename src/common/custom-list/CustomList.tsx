import { FC } from "react";
import ArrowChekRight from "../../assets/icons/ArrowChekUp.svg";
import {
  CustomListDataProps,
  CustomListStaticDataType,
  CustomListDropDataType,
} from "../../components/left-sidebar/leftSidebar.interface";
import styles from "./custom_list.module.scss";

const CustomList: FC<CustomListDataProps> = ({
  customListStaticData,
  customListDropData,
}) => {
  return (
    <ul className={styles.ul}>
      {customListStaticData &&
        customListStaticData.length != 0 &&
        customListStaticData.map((item: CustomListStaticDataType) => {
          return (
            <li key={item.id} className={styles.li_statik}>
              <a href={item.url}>
                <h4>{item.title}</h4>
              </a>
            </li>
          );
        })}
      {customListDropData &&
        customListDropData.length != 0 &&
        customListDropData.map((item) => {
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
                    <img src={ArrowChekRight} />
                  </button>
                  <ul
                    className="collapse multi-collapse"
                    id={`multiCollapseExample${item.id}`}
                  >
                    {item.customListDropItem.map(
                      (subItem: CustomListDropDataType) => {
                        return (
                          <li key={subItem.id}>
                            <a href={subItem.url}>
                              <h4>{subItem.title}</h4>
                            </a>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default CustomList;
