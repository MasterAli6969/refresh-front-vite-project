import { FC } from "react";
//ИКОНКИ
import AddNewUserIcon from "../../../../../../assets/icons/AddNewUserIcon.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
import AddNewRoomsModalWindows from "../add-new-rooms-button/add-new-rooms-modal-windows/AddNewRoomsModalWindows";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CustomButton from "../../../../../../common/static-components/custom-button/CustomButton";

const AddNewUserBottom: FC = () => {
  return (
    <div>
      <CustomCenterModalOpenWrapper
        redaxStateKey="addNewRoomsModalWindows"
        openComponents={() => (
          <AddNewRoomsModalWindows redaxStateKey="addNewRoomsModalWindows" />
        )}
      >
        <CustomButton icon={AddNewUserIcon} color="dark" />
      </CustomCenterModalOpenWrapper>
    </div>
  );
};

export default AddNewUserBottom;
