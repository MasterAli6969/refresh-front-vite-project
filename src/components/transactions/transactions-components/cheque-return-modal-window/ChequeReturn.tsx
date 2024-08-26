import { FC } from "react";

import CustomInput from "../../../../common/static-components/custom-input/CustomInput";
import CustomTextarea from "../../../../common/static-components/custom-textarea/CustomTextarea";

import { RedaxStateProps } from "../../../../commonTypes.interface";

import styles from "./cheque_return.module.scss";
import CutomModalWindowUniversal from "../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-universal/CutomModalWindowUniversal";

export interface ChequeReturnPropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const ChequeReturn: FC<ChequeReturnPropsType> = ({ redaxStateKey, title }) => {
  return (
    <div className={styles.div}>
      <CutomModalWindowUniversal
        redaxStateKey={redaxStateKey}
        title={title}
        components={[
          () => <CustomInput placeholder="gog25" />,
          () => <CustomInput placeholder="gog25" />,
          () => <CustomInput placeholder="gog25" />,
          () => <CustomTextarea plaseholder="gog25265" label="ascasc" />,
        ]}
      />
    </div>
  );
};

export default ChequeReturn;
