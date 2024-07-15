import { FC, useRef } from "react";

import ControlPanelPcIcons from "../../components/control-panel/control-panel-pc-icons/ControlPanelPcIcons";
import ControlPanelHeader from "../../components/control-panel/control-panel-header/ControlPanelHeader";

import styles from "./central_panel.module.scss";

const ControlPanel: FC = () => {
  const panelRef = useRef(null);

  return (
    <div className={styles.div}>
      <div>
        <ControlPanelHeader />
      </div>
      <div className={styles.subdiv_pc_icon} ref={panelRef}>
        <ControlPanelPcIcons />
      </div>
    </div>
  );
};

export default ControlPanel;
