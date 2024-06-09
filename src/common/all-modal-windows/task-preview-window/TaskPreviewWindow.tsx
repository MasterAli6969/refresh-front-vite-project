import { FC } from "react";

import CustomModalHead from "../../custom-modal-head/CustomModalHead";
import CustomUserName from "../../custom-user-name/CustomUserName";
import CustomDualTextDisplay from "../../custom-dual-text-display/CustomDualTextDisplay";
import CustomLineProgress from "../../custom-line-progress/CustomLineProgress";
import CustomButton from "../../custom-button/CustomButton";

import styles from "./task_preview_window.module.scss";

const TaskPreviewWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Просмотр задачи" />
      </div>
      <div>
        <CustomUserName name="Алексей Лариков" initials="AЛ" />
      </div>
      <div>
        <CustomDualTextDisplay
          text1="Срок выполнения задания"
          text2="ДО 05.05.2005 13:00"
        />
      </div>
      <div>
        <CustomLineProgress text="Прогресс выполнения" valuePropgress="10%" />
      </div>
      <div>
        <CustomDualTextDisplay
          text1="Описание задания"
          text2="Почистить клавиатуры, мыши, мониторы. Передать сменщику, чтобы делал тоже самое!"
        />
      </div>
      <div className={styles.subdiv}>
        <CustomButton color="light" text="Приступить к выполнению" />
        <CustomButton color="warning" text="Удалить задание" />
      </div>
      <div>
        <CustomButton color="light" text="Завершить выполнение" />
      </div>
    </div>
  );
};

export default TaskPreviewWindow;
