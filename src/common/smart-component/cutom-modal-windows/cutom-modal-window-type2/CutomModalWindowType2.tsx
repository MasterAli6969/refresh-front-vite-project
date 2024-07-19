import { FC } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomDualButtonYesNo from "../../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import styles from "./cutom_modal_window_type2.module.scss";

export interface CutomModalWindowType2PropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
  descritpion?: string;
  rightButton: string;
}

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
      {descritpion && (
        <div>
          <p>{descritpion}</p>
        </div>
      )}
      <div>
        <CustomDualButtonYesNo
          redaxStateKey={redaxStateKey}
          buttonRightText={rightButton}
        />
      </div>
    </div>
  );
};

export default CutomModalWindowType2;
