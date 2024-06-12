import { FC } from "react";

import MessagesIcons from "../../../../assets/icons/MessagesIcons.svg";
import CustomModalButton from "../../../../common/common-UI-components/custom-modal-button/CustomModalButton";
import DialogWindow from "../../../../common/all-modal-windows/chat-window/dialog-window/DialogWindow";
import Messenger from "../../../../common/all-modal-windows/chat-window/messenger/Messenger";

import styles from "./message.module.scss";

const MessageButton: FC = () => {
  return (
    <div className={styles.div}>
      <CustomModalButton
        icon={MessagesIcons}
        title="Сообщения"
        buttonLeft={Messenger}
        buttonRight={DialogWindow}
      />
    </div>
  );
};

export default MessageButton;
