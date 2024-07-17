import { FC } from "react";

import { CutomModalWindowType2PropsType } from "./cutomModalWindowType2.interface";
import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomButton from "../../../static-components/custom-button/CustomButton";

import styles from "./cutom_modal_window_type2.module.scss";

const CutomModalWindowType2: FC<CutomModalWindowType2PropsType> = ({
  redaxStateKey,
  title,
  specialText,
  descritpion,
  rightButton,
}) => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
          text={title}
          specialText={specialText}
        />
      </div>
      <div>
        <p>{descritpion}</p>
      </div>
      <div>
        <CustomButton color="dark" text="Отмена" />
        <CustomButton color="light" text={rightButton} />
      </div>
    </div>
  );
};

export default CutomModalWindowType2;
