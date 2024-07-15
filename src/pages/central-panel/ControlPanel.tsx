import { FC, useRef } from "react";

import styles from "./central_panel.module.scss";
import CentralPanelPcIcons from "../../components/control-panel/central-panel-pc-icons/CentralPanelPcIcons";

const ControlPanel: FC = () => {
  const panelRef = useRef(null);

  return (
    <div className={styles.div} ref={panelRef}>
      <div>
        <CentralPanelPcIcons />
      </div>
    </div>
  );
};

export default ControlPanel;
