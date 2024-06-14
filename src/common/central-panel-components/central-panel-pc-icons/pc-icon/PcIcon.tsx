import { FC } from "react";

import { CircularProgress } from "@mui/material";
import classNames from "classnames";

import PcIconModalWindow from "./pc-icon-components/pc-modal-modal-window/PcIconModalWindow";

import { PcIconPropsType } from "./pcIcon.interface";

import styles from "./pc_icon.module.scss";

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
              ? " #00F20A"
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
