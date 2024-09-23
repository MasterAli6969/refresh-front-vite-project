import { FC } from "react";
import classNames from "classnames";
//ИКОНКИ
import WarningIconSmall from "../../../../../assets/icons/WarningIconSmall.svg";
import WindowsIconSmall from "../../../../../assets/icons/WindowsIconSmall.svg";
import PcIconBorder from "../../../../../assets/icons/PcIconBorder.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
import PcIconMenu, { PcIconMenuDataType } from "./pc-icon-menu/PcIconMenu";
//МОДУЛИ ДЛЯ РЕНДЕРА
import { CircularProgress } from "@mui/material";

//СТИЛИ
import styles from "./pc_icon.module.scss";

// Тип для объекта внутри pcIconData
export interface PcIconDataObjektType {
  status: string;
  pcNumber: number;
  timeLeftPcent: number;
  pcIconModalWindowData: PcIconMenuDataType;
}

// Тип для основного массива данных

export interface PcIconPropsType {
  pcIconDataObjekt: PcIconDataObjektType;
}

const PcIcon: FC<PcIconPropsType> = ({ pcIconDataObjekt }) => {
  const valueProgress = pcIconDataObjekt.timeLeftPcent;
  return (
    <div
      className={classNames(styles.div, {
        [styles._off_mode]: pcIconDataObjekt.status === "OffMode",
        [styles._standby_mode]: pcIconDataObjekt.status === "StandbyMode",
        [styles._active_mode]: pcIconDataObjekt.status === "ActiveMode",
        [styles._service_mode]: pcIconDataObjekt.status === "ServiceMode",
        [styles._administration_mode]:
          pcIconDataObjekt.status === "AdministrationMode",
      })}
    >
      {pcIconDataObjekt.status === "ActiveMode" && (
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
      )}

      <div className={styles.subdiv_number}>
        <p>{pcIconDataObjekt.pcNumber}</p>
      </div>
      <div className={styles.subdiv_menu}>
        <PcIconMenu
          pcStatus={pcIconDataObjekt.status}
          pcIconModalWindowData={pcIconDataObjekt.pcIconModalWindowData}
        />
      </div>
      {pcIconDataObjekt.status === "ServiceMode" && (
        <img className={styles.subdiv_icon} src={WarningIconSmall} />
      )}
      {pcIconDataObjekt.status === "AdministrationMode" && (
        <img className={styles.subdiv_icon} src={WindowsIconSmall} />
      )}
      <img
        draggable="false"
        className={styles.pc_icon_border}
        src={PcIconBorder}
      />
    </div>
  );
};

export default PcIcon;
