import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./repair_mode.module.scss";
import DangerIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/DangerIcon";
import { useAppSelector } from "../../../../../../../../../../../features/redux/hooks/reduxRootHooks";

interface RepairModePropsType {
  comp_id: number;
}

const RepairMode: FC<RepairModePropsType> = ({ comp_id }) => {
  const isRepairModeStatus = useAppSelector(
    (state) =>
      state.pcIconStatusEdit.pcStatus[comp_id]?.isRepairModeStatus ?? false
  );

  return (
    <div className={styles.div}>
      <div>
        <DangerIcon color={`${isRepairModeStatus ? "#fff" : "#E6543F"}`} />
      </div>
      {isRepairModeStatus ? (
        <h5>Выключить режим ремонта</h5>
      ) : (
        <h5>Режим ремонта</h5>
      )}
    </div>
  );
};

export default RepairMode;
