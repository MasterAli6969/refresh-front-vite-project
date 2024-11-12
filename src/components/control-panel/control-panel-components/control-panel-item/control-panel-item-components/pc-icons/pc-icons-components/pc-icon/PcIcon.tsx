import { FC, useState } from "react";
import classNames from "classnames";
//ИКОНКИ
import WarningIconSmall from "../../../../../../../../assets/icons/WarningIconSmall.svg";
import WindowsIconSmall from "../../../../../../../../assets/icons/WindowsIconSmall.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
import { useAppSelector } from "../../../../../../../../features/redux/hooks/reduxRootHooks";
//МОДУЛИ ДЛЯ РЕНДЕРА
import PcIconContextPrimaryMenu from "./pc-icon-constext-primary-menu/PcIconContextPrimaryMenu";
//СТИЛИ
import styles from "./pc_icon.module.scss";

export interface PcIconPropsType {
  comp_id: number;
}

const PcIcon: FC<PcIconPropsType> = ({ comp_id }) => {
  const [timeActive, setTimeActive] = useState<number>(0);

  const isWinActiveStatus = useAppSelector(
    (state) =>
      state.pcIconStatusEdit.pcStatus[comp_id]?.isWinActiveStatus ?? false
  );

  const isRepairModeStatus = useAppSelector(
    (state) =>
      state.pcIconStatusEdit.pcStatus[comp_id]?.isRepairModeStatus ?? false
  );

  const isOnStatus = useAppSelector(
    (state) => state.pcIconStatusEdit.pcStatus[comp_id]?.isOnStatus ?? false
  );

  const pcStatusActive = useAppSelector(
    (state) => state.pcIconStatusEdit.pcStatusActive[comp_id] ?? false
  );

  const handlerСonvertToPercentage = () => {};

  return (
    <div
      className={classNames(styles.pc_icon, {
        [styles.on_status]: isOnStatus,
      })}
    >
      {isRepairModeStatus && (
        <img src={WarningIconSmall} className={styles.staus_icon} />
      )}
      {isWinActiveStatus && (
        <img src={WindowsIconSmall} className={styles.staus_icon} />
      )}
      <div className={styles.pc_number}>
        <p>{pcStatusActive.activeTime}</p>
        {pcStatusActive.statusActive && <p>СТАТУС АКТИВЕН</p>}

        <p>{comp_id}</p>
      </div>
      <div className={styles.context_menu}>
        <PcIconContextPrimaryMenu comp_id={comp_id} />
      </div>
    </div>
  );
};

export default PcIcon;

{
  /* import { CircularProgress } from "@mui/material"; {
      const valueProgress = pcIconDataObjekt.timeLeftPcent;
      pcIconDataObjekt.status === "ActiveMode" && (
        <CircularProgress
          sx={{
            color:
              valueProgress >= 70
                ? " #159900"
                : valueProgress >= 40
                ? "#FAFF00"
                : "#FF3D00",
          }}
          variant="determinate"
          value={valueProgress}
        />
      )} */
}
