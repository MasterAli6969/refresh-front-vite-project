import { FC } from "react";

import UserPanel from "./header-components/user-panel/UserPanel";

import { userPanelData } from "./data";

import styles from "./header.module.scss";
import ShiftPanel from "./header-components/shift-panel/ShiftPanel";

const Header: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <ShiftPanel />
        <UserPanel userPanelData={userPanelData} />
      </div>
    </div>
  );
};

export default Header;
