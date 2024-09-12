import { FC } from "react";

import SearchInput from "./header-components/search-input/SearchInput";
import UserPanel from "./header-components/user-panel/UserPanel";

import { userPanelData } from "./data";

import styles from "./header.module.scss";
import ShiftPanel from "./header-components/shift-panel/ShiftPanel";

const Header: FC = () => {
  return (
    <div className={styles.div}>
      <SearchInput />
      <div className={styles.subdiv}>
        <ShiftPanel />
        <UserPanel userPanelData={userPanelData} />
      </div>
    </div>
  );
};

export default Header;
