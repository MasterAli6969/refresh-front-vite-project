import { FC } from "react";

import MessagesIcons from "../../../../assets/icons/MessagesIcons.svg";
import CustomModalButton from "../../../../common/custom-modal-button/CustomModalButton";
import CustomDialogWindow from "../../../../common/custom-dialog-window/CustomDialogWindow";
import CustomMessenger from "../../../../common/custom-messenger/CustomMessenger";

import styles from "./message.module.scss";

const MessageButton: FC = () => {
  return (
    <div className={styles.div}>
      <CustomModalButton
        icon={MessagesIcons}
        title="Сообщения"
        buttonLeft={CustomMessenger}
        buttonRight={CustomDialogWindow}
      />
    </div>
  );
};

export default MessageButton;
