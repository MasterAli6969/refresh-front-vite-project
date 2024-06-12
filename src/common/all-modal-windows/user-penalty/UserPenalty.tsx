import { FC } from "react";

import CustomModalHead from "../../common-UI-components/custom-modal-head/CustomModalHead";
import CustomInput from "../../custom-input/CustomInput";
import CustomTextarea from "../../custom-textarea/CustomTextarea";
import CustomButton from "../../common-UI-components/custom-button/CustomButton";

import styles from "./user_penalty.module.scss";

const UserPenalty: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Открытие новой смены" specialText="ГОСТЬ" />
      </div>
      <div>
        <CustomInput
          label="Количество штрафных минут"
          plaseholder="Введите нужное значение"
        />
      </div>
      <div>
        <CustomInput
          label="Сумма штрафа"
          plaseholder="Введите сумму штрафа пользователя"
        />
      </div>
      <div>
        <CustomTextarea
          label="Комментарий"
          plaseholder="Нарушение правил клуба"
        />
      </div>
      <div>
        <CustomButton color="light" text="Готово" />
      </div>
    </div>
  );
};

export default UserPenalty;
