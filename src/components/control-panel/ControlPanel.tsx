import { FC, useRef } from "react";

import ControlPanelHeader from "./control-panel-components/control-panel-header/ControlPanelHeader";
import ControlPanelPcIcons from "./control-panel-components/control-panel-pc-icons/ControlPanelPcIcons";

const ControlPanel: FC = () => {
  const panelRef = useRef(null);

  return (
    <div>
      <div>
        <ControlPanelHeader />
      </div>
      <div ref={panelRef}>
        <ControlPanelPcIcons />
      </div>
    </div>
  );
};

export default ControlPanel;
