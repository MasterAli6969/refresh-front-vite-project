import { FC } from "react";

import PlusAdd from "../../../../../assets/icons/PlusAdd.svg";
import CustomCenterModalOpenWrapper from "../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import CutomModalWindowType1 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type1/CutomModalWindowType1";

import styles from "./add_new_rooms_button.module.scss";

const AddNewRoomsButton: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <CustomCenterModalOpenWrapper
          redaxStateKey="isAddNewRoomsButtonModalOpen"
          openComponents={() => (
            <CutomModalWindowType1
              redaxStateKey="isAddNewRoomsButtonModalOpen"
              title="Добавление новой комнаты"
            />
          )}
        >
          <img src={PlusAdd} alt="Edit icon" />
        </CustomCenterModalOpenWrapper>
      </div>
    </div>
  );
};

export default AddNewRoomsButton;
