import { FC } from "react";

import NewShiftWindow from "../common/all-modal-windows/new-shift-window/NewShiftWindow";

const ControlPanel: FC = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <NewShiftWindow />
    </div>
  );
};

export default ControlPanel;
