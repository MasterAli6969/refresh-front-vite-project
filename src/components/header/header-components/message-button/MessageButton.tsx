import { FC } from "react";

import MessagesIcons from "../../../../assets/icons/MessagesIcons.svg";
import CustomSwitchModalButton from "../../../../common/smart-component/custom-modal-open-button-switch/CustomModalOpenButtonSwitch";
import DialogWindow from "./chat-window/dialog-window/DialogWindow";
import Messenger from "./chat-window/messenger/Messenger";

import styles from "./message.module.scss";

const MessageButton: FC = () => {
  return (
    <div className={styles.div}>
      <CustomSwitchModalButton
        icon={MessagesIcons}
        title="Сообщения"
        buttonLeft={Messenger}
        buttonRight={DialogWindow}
      />
    </div>
  );
};

export default MessageButton;
