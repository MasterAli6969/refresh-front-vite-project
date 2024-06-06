import { FC } from "react";

import CloseIcon from "../../assets/icons-svg-components/CloseIcon";

import { CustomModalHeadPropsType } from "./customModalHead.interface";

import styles from "./custom_modal_head.module.scss";

const CustomModalHead: FC<CustomModalHeadPropsType> = ({ text }) => {
  return (
    <div className={styles.div}>
      <h3>{text}</h3>
      <div>
        <CloseIcon />
      </div>
    </div>
  );
};

export default CustomModalHead;
