import { FC } from "react";

import { CircularProgress } from "@mui/material";
import classNames from "classnames";

import PcIconModalWindow, {
  PcIconMenuDataType,
} from "./pc-icon-menu/PcIconMenu";

import styles from "./pc_icon.module.scss";

// Тип для объекта внутри pcIconData
export interface PcIconDataObjektType {
  status: string;
  pcNumber: number;
  timeLeftPcent: number;
  pcIconModalWindowData: PcIconMenuDataType;
}

// Тип для основного массива данных
export interface PcIconDataType {
  id: number;
  pcIconDataObjekt: PcIconDataObjektType;
}

export interface PcIconPropsType {
  pcIconDataObjekt: PcIconDataObjektType;
}

const PcIcon: FC<PcIconPropsType> = ({ pcIconDataObjekt }) => {
  const valueProgress = pcIconDataObjekt.timeLeftPcent;
  return (
    <div
      className={classNames(styles.div, {
        [styles._active]: pcIconDataObjekt.status === "Active",
        [styles._no_active]: pcIconDataObjekt.status === "No Active",
        [styles._included]: pcIconDataObjekt.status === "Included",
        [styles._servicing]: pcIconDataObjekt.status === "Servicing",
      })}
    >
      <CircularProgress
        sx={{
          color:
            valueProgress >= 70
              ? " #010601"
              : valueProgress >= 40
              ? "#FAFF00"
              : "#FF3D00",
        }}
        variant="determinate"
        value={valueProgress}
      />
      <div className={styles.subdiv_number}>{pcIconDataObjekt.pcNumber}</div>
      <div className={styles.subdiv_menu}>
        <PcIconModalWindow
          pcStatus={pcIconDataObjekt.status}
          pcIconModalWindowData={pcIconDataObjekt.pcIconModalWindowData}
        />
      </div>
    </div>
  );
};

export default PcIcon;
