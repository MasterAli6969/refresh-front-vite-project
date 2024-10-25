import { FC } from "react";

import styles from "./custom_dynamic_list.module.scss";

interface CustomDynamicListPropsType {
  listItem: FC[];
}

const CustomDynamicList: FC<CustomDynamicListPropsType> = ({ listItem }) => {
  return (
    <ul className={styles.ul}>
      {listItem &&
        listItem.length !== 0 &&
        listItem.map((Component, index) => (
          <li key={index}>
            <Component />
          </li>
        ))}
    </ul>
  );
};

export default CustomDynamicList;
