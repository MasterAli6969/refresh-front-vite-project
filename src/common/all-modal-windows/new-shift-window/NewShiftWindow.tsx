import { FC } from "react";

import CustomModalHead from "../../custom-modal-head/CustomModalHead";
import CustomInput from "../../custom-input/CustomInput";
import CustomTextarea from "../../custom-textarea/CustomTextarea";
import CustomButton from "../../custom-button/CustomButton";

import styles from "./new_shift_window.module.scss";

const NewShiftWindow: FC = () => {
  return (
    <div className={styles.div}>
      <CustomModalHead text="Открытие новой смены" />
      <div className={styles.subdiv_input}>
        <div>
          <CustomInput
            label="Сумма на начало смены"
            plaseholder="Введите сумму"
          />
        </div>
      </div>
      <div className={styles.subdiv_textarea}>
        <CustomTextarea
          label="Сумма на начало смены"
          plaseholder="Введите комментарий"
        />
      </div>
      <div>
        <CustomButton color="light" text="Отправить" />
      </div>
    </div>
  );
};

export default NewShiftWindow;
