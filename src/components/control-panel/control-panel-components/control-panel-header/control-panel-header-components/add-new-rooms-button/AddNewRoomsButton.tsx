import { FC } from "react";

import AddNewRoomIcon from "../../../../../../assets/icons/AddNewRoomIcon.svg";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CustomButton from "../../../../../../common/static-components/buttons/custom-button/CustomButton";
import AddNewRoomsButtonModalWindow from "./add-new-rooms-button-modal-window/AddNewRoomsButtonModalWindow";

const AddNewRoomsButton: FC = () => {
  return (
    <div>
      <CustomCenterModalOpenWrapper
        redaxStateKey="addNewRoomsButtonModalWindow"
        openComponents={() => (
          <AddNewRoomsButtonModalWindow
            redaxStateKey="addNewRoomsButtonModalWindow"
            title="Создать новую комнату"
          />
        )}
      >
        <CustomButton color="dark">
          <img src={AddNewRoomIcon} />
        </CustomButton>
      </CustomCenterModalOpenWrapper>
    </div>
  );
};

export default AddNewRoomsButton;
