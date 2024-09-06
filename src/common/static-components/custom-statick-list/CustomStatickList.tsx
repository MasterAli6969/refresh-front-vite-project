import { FC } from "react";
import { ListType } from "../../../commonTypes.interface";

import styles from "./custom_statick_list.module.scss";

export interface CustomStatickListPropsType {
  customStatickListData?: ListType[];
}

const CustomStatickList: FC<CustomStatickListPropsType> = ({
  customStatickListData,
}) => {
  return (
    <ul className={styles.ul}>
      {!customStatickListData || customStatickListData.length === 0 ? (
        <h1>Ooops, server error, please wait...</h1>
      ) : (
        customStatickListData.map((item: ListType) => (
          <li key={item.id}>
            <a href={item.url}>
              <p>{item.title}</p>
            </a>
          </li>
        ))
      )}
    </ul>
  );
};

export default CustomStatickList;
