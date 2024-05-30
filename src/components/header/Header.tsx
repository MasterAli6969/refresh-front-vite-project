import { FC } from "react";
import SearchInput from "./header-components/search-input/SearchInput";
import NoticesButton from "./header-components/notices-button/NoticesButton";
import MessageButton from "./header-components/message-button/MessageButton";
import UserPanel from "./header-components/user-panel/UserPanel";
import { userPanelData } from "./data";
import styles from "./header.module.scss";

const Header: FC = () => {
  return (
    <div className={styles.div}>
      <SearchInput />
      <div className={styles.subdiv}>
        <MessageButton />
        <NoticesButton />
        <UserPanel userPanelData={userPanelData} />
      </div>
    </div>
  );
};

export default Header;
