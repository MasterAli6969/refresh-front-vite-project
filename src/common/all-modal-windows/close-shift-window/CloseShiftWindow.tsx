import { FC } from "react";

import CustomModalHead from "../../custom-modal-head/CustomModalHead";
import CustomAvatarName from "../../custom-avatar-name/CustomAvatarName";
import CustomDualTextDisplay from "../../custom-dual-text-display/CustomDualTextDisplay";
import CustomTextarea from "../../custom-textarea/CustomTextarea";
import CustomButton from "../../custom-button/CustomButton";

import styles from "./close_shift_window.module.scss";

const CloseShiftWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Закрытие смены" />
      </div>
      <div className={styles.subdiv_employee}>
        <h3>Сотрудник смены</h3>
        <div>
          <CustomAvatarName name="AL" />
          <h3>Алексей Лариков</h3>
        </div>
      </div>
      <div>
        <CustomDualTextDisplay text1="Начало смены" text2="05.05.2005 13:00" />
      </div>
      <div>
        <CustomTextarea label="Комментарий" plaseholder="Введите комментарий" />
      </div>
      <div>
        <CustomButton color="light" text="Закрытие смены и печать отчета" />
      </div>
    </div>
  );
};

export default CloseShiftWindow;
