import { FC } from "react";

import SearchInput from "./header-components/search-input/SearchInput";
import UserPanel from "./header-components/user-panel/UserPanel";
import MessageButton from "./header-components/message-button/MessageButton";
import NoticeButton from "./header-components/notice-button/NoticeButton";

import { userPanelData } from "./data";

import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.div}>
      <SearchInput />
      <div className={styles.subdiv}>
        <div>
          <MessageButton />
        </div>
        <div>
          <NoticeButton />
        </div>
        <UserPanel userPanelData={userPanelData} />
      </div>
    </div>
  );
};

export default Header;
