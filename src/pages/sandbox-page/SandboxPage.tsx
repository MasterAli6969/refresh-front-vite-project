import { FC } from "react";
// МОДУЛИ ДЛЯ РЕНДЕРА
import { Grid } from "@mui/material";
//ДИНАМИЧНЫЕ ИКОНКИ КАК ОТДЕЛЬНЫЕ КОМПОНЕНТЫ С ВШИТОЙ ЛОГИКОЙ ПРИЁМА ЦВЕТА ИКОНКИ НА ВХОД
import SandboxIcon from "./sandbox-item/SandboxIcon";
// КОМПОНЕТНЫ UI ДЛЯ СТАТИЧНОГО РЕНДЕРА
import SandboxStaticComponents from "./sandbox-item/SandboxStaticComponents";

// КАСТАМНЫЕ МОУДЛИ С ЛОГИКОЙ ИЛИ СИСТЕМЫ ДЛЯ УМНОГО РЕНДЕРА

// КАСТАМНЫЕ МОУДЛИ С ЛОГИКОЙ ИЛИ СИСТЕМЫ ДЛЯ УМНОГО РЕНДЕРА

// СТИЛИ ДЛЯ СЭНДБОКС СТРАНИЦЫ
import styles from "./sandbox.module.scss";
import SandboxSmartComponents from "./sandbox-item/SandboxSmartComponents";

const SandboxPage: FC = () => {
  return (
    <div>
      <Grid container className={styles.div}>
        <Grid item md={4} className={styles.subdiv_left}>
          <SandboxIcon />
        </Grid>
        <Grid item md={4} className={styles.subdiv_center}>
          <SandboxStaticComponents />
        </Grid>
        <Grid item md={4} className={styles.subdiv_right}>
          <SandboxSmartComponents />
        </Grid>
      </Grid>

      <div></div>
    </div>
  );
};

export default SandboxPage;
