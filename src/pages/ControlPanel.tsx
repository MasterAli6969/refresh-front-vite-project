import { FC } from "react";

import NewShiftWindow from "../common/all-modal-windows/new-shift-window/NewShiftWindow";
import CloseShiftWindow from "../common/all-modal-windows/close-shift-window/CloseShiftWindow";
import EditCentralPanel from "../common/all-modal-windows/edit-central-panel/EditCentralPanel";
import CustomConfirmationModalWindow from "../common/custom-confirmation-modal-window/CustomConfirmationModalWindow";
import AddZoneWindow from "../common/all-modal-windows/add-zone-window/AddZoneWindow";
import TaskPreviewWindow from "../common/all-modal-windows/task-preview-window/TaskPreviewWindow";

const ControlPanel: FC = () => {
  return (
    <div>
      <NewShiftWindow />
      <CloseShiftWindow />
      <EditCentralPanel />
      <CustomConfirmationModalWindow text="Вы действительно хотите удалить зону?" />
      <AddZoneWindow />
      <TaskPreviewWindow />
    </div>
  );
};

export default ControlPanel;
