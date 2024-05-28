import { FC } from "react";
import MessagesIcons from "../../../../assets/icons/MessagesIcons.svg";
import styles from "./message_button.module.scss";

const MessageButton: FC = () => {
  return (
    <>
      <div className={styles.div}>
        <img src={MessagesIcons} />
      </div>
    </>
  );
};

export default MessageButton;
