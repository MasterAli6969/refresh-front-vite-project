import { FC } from "react";
import classNames from "classnames";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import PcIconContextPrimaryMenu from "./pc-icon-constext-primary-menu/PcIconContextPrimaryMenu";
//СТИЛИ
import styles from "./pc_icon.module.scss";

export interface PcIconPropsType {
  comp_id: number;
}

const PcIcon: FC<PcIconPropsType> = ({ comp_id }) => {
  return (
    <div className={classNames(styles.pc_icon)}>
      <div className={styles.pc_number}>
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
