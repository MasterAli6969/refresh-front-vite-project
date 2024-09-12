import { FC } from "react";

import AddNewRoomIcon from "../../../../../../assets/icons/AddNewRoomIcon.svg";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CutomModalWindowType1 from "../../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-types/cutom-modal-window-type1/CutomModalWindowType1";
import CustomButton from "../../../../../../common/static-components/custom-button/CustomButton";

const AddNewRoomsButton: FC = () => {
  return (
    <div>
      <CustomCenterModalOpenWrapper
        redaxStateKey="addNewRoomsButtonModalWindow"
        openComponents={() => (
          <CutomModalWindowType1
            redaxStateKey="addNewRoomsButtonModalWindow"
            title="Создать новую комнату"
          />
        )}
      >
        <CustomButton icon={AddNewRoomIcon} color="dark" />
      </CustomCenterModalOpenWrapper>
    </div>
  );
};

export default AddNewRoomsButton;
