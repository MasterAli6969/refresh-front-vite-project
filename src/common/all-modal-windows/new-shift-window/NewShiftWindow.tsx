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
        <h3>Сумма на начало смены</h3>
        <div>
          <CustomInput text="Введите сумму" />
        </div>
      </div>
      <div className={styles.subdiv_textarea}>
        <h3>Сумма на начало смены</h3>
        <CustomTextarea text="Введите комментарий" />
      </div>
      <div>
        <CustomButton text="Отправить" />
      </div>
    </div>
  );
};

export default NewShiftWindow;
