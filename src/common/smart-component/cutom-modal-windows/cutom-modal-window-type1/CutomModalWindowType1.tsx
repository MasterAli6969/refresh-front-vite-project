import { FC } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomInput from "../../../static-components/custom-input/CustomInput";
import CustomButton from "../../../static-components/custom-button/CustomButton";

import styles from "./cutom_modal_window_type1.module.scss";

export interface CutomModalWindowType1PropsType1 extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const CutomModalWindowType1: FC<CutomModalWindowType1PropsType1> = ({
  redaxStateKey,
  title,
  specialText,
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
        <CustomInput
          label="Название комнаты"
          plaseholder="Введите новое название комнаты"
        />
      </div>
      <div>
        <CustomButton color="dark" text="Отмена" />
        <CustomButton color="light" text="Сохранить" />
      </div>
    </div>
  );
};

export default CutomModalWindowType1;
