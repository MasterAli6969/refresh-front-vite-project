import { FC } from "react";
//ИКОНКИ
import AddNewUserIcon from "../../../../../../assets/icons/AddNewUserIcon.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
import AddNewUserModalWindows from "./add-new-user-button-modal-windows/AddNewUserModalWindows";
import CustomCenterModalOpenWrapper from "../../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CustomButton from "../../../../../../common/static-components/custom-button/CustomButton";

const AddNewUserButton: FC = () => {
  return (
    <div>
      <CustomCenterModalOpenWrapper
        redaxStateKey="AddNewUserModalWindows"
        openComponents={() => (
          <AddNewUserModalWindows redaxStateKey="AddNewUserModalWindows" />
        )}
      >
        <CustomButton icon={AddNewUserIcon} color="dark" />
      </CustomCenterModalOpenWrapper>
    </div>
  );
};

export default AddNewUserButton;
