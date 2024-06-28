import { FC, useRef } from "react";
import { Grid } from "@mui/material";

import styles from "./central_panel.module.scss";
import CentralPanelPcIcons from "../../components/central-header/central-panel-components/central-panel-pc-icons/CentralPanelPcIcons";

const ControlPanel: FC = () => {
  const panelRef = useRef(null);

  return (
    <>
      <div className={styles.div} ref={panelRef}>
        <CentralPanelPcIcons />
      </div>
      ;
    </>
  );
};

export default ControlPanel;
