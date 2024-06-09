import { FC } from "react";

import CloseIcon from "../../assets/icons-svg-components/CloseIcon";

import { CustomModalHeadPropsType } from "./customModalHead.interface";

import styles from "./custom_modal_head.module.scss";

const CustomModalHead: FC<CustomModalHeadPropsType> = ({
  text,
  specialText,
}) => {
  return (
    <div className={styles.div}>
      <h3>
        {text}
        {specialText && <span> {specialText} </span>}
      </h3>
      <div>
        <CloseIcon />
      </div>
    </div>
  );
};

export default CustomModalHead;
