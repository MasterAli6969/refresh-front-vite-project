import { FC, useRef } from "react";

import styles from "./central_panel.module.scss";
import CentralPanelPcIcons from "../../components/central-header/central-panel-components/central-panel-pc-icons/CentralPanelPcIcons";
import CentralHeader from "../../components/central-header/CentralHeader";
import RightSidebar from "../../components/right-sidebar/RightSidebar";

const ControlPanel: FC = () => {
  const panelRef = useRef(null);

  return (
    <div className="m-0 p-0 row">
      <div className="m-0 col-md-9">
        <CentralHeader />
        <div className={styles.div} ref={panelRef}>
          <CentralPanelPcIcons />
        </div>
      </div>
      <div className="m-0 p-0 col-md-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default ControlPanel;
