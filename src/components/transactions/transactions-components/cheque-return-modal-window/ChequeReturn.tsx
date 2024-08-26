import { FC } from "react";

import CustomModalCloseHead from "../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";

import { RedaxStateProps } from "../../../../commonTypes.interface";

import styles from "./cheque_return.module.scss";

export interface CutomModalWindowType1PropsType1 extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const ChequeReturn: FC<CutomModalWindowType1PropsType1> = ({
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

export default ChequeReturn;
