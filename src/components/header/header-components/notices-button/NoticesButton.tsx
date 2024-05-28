import { FC } from "react";
import NoticesIcons from "../../../../assets/icons/NoticesIcons.svg";
import styles from "./notices_button.module.scss";

const NoticesButton: FC = () => {
  return (
    <>
      <div className={styles.div}>
        <img src={NoticesIcons} />
      </div>
    </>
  );
};

export default NoticesButton;
