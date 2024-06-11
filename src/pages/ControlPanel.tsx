import { FC } from "react";

import NewShiftWindow from "../common/all-modal-windows/new-shift-window/NewShiftWindow";
import CloseShiftWindow from "../common/all-modal-windows/close-shift-window/CloseShiftWindow";
import EditCentralPanel from "../common/all-modal-windows/edit-central-panel/EditCentralPanel";
import CustomConfirmationModalWindow from "../common/custom-confirmation-modal-window/CustomConfirmationModalWindow";
import AddZoneWindow from "../common/all-modal-windows/add-zone-window/AddZoneWindow";
import TaskPreviewWindow from "../common/all-modal-windows/task-preview-window/TaskPreviewWindow";
import ReplenishmentBalanceWindow from "../common/all-modal-windows/replenishment-balance-window/ReplenishmentBalanceWindow";
import EditPc from "../common/all-modal-windows/edit-pc/EditPc";
import UserPenalty from "../common/all-modal-windows/user-penalty/UserPenalty";
import ChangeLocation from "../common/all-modal-windows/change-location/ChangeLocation";

const ControlPanel: FC = () => {
  return (
    <div>
      <NewShiftWindow />
      <CloseShiftWindow />
      <EditCentralPanel />
      <CustomConfirmationModalWindow text="Вы действительно хотите удалить зону?" />
      <AddZoneWindow />
      <TaskPreviewWindow />
      <ReplenishmentBalanceWindow />
      <EditPc />
      <UserPenalty />
      <ChangeLocation />
    </div>
  );
};

export default ControlPanel;
