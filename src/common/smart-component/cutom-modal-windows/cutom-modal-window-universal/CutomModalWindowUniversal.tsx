import { FC } from "react";

import { RedaxStateProps } from "../../../../commonTypes.interface";

import styles from "./cutom_modal_window_universal.module.scss";
import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";

export interface CutomModalWindowUniversalPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
  components: FC[];
}

const CutomModalWindowUniversal: FC<CutomModalWindowUniversalPropsType> = ({
  redaxStateKey,
  title,
  specialText,
}) => {
  return (
    <div className={styles.div}>
      <CustomModalCloseHead
        redaxStateKey={redaxStateKey}
        text={title}
        specialText={specialText}
      />
    </div>
  );
};

export default CutomModalWindowUniversal;
