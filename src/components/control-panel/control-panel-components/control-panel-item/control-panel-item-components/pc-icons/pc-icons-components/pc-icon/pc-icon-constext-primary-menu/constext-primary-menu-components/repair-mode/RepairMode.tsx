import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./repair_mode.module.scss";
import DangerIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/DangerIcon";

interface RepairModePropsType {
  comp_id: number;
}

const RepairMode: FC<RepairModePropsType> = () => {
  return (
    <div className={styles.div}>
      <div>
        <DangerIcon color="#fff" />
      </div>
      <h5>Режим ремонта</h5>
    </div>
  );
};

export default RepairMode;
