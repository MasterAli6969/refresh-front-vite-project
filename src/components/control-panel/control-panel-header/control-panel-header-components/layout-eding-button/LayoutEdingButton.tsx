import { FC } from "react";

import LockAltLight from "../../../../../assets/icons/LockAltLight.svg";
import CustomCenterModalOpenWrapper from "../../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";

import styles from "./layout_eding_button.module.scss";
import CutomModalWindowType2 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type2/CutomModalWindowType2";

const LayoutEdingButton: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <CustomCenterModalOpenWrapper
          redaxStateKey="isLayoutEdingButtonModalOpen"
          openComponents={() => (
            <CutomModalWindowType2
              redaxStateKey="isLayoutEdingButtonModalOpen"
              title="Редактирование макета"
              descritpion="Включить режим редактирования макета?"
              rightButton="Включить"
            />
          )}
        >
          <img src={LockAltLight} alt="Edit icon" />
        </CustomCenterModalOpenWrapper>
      </div>
    </div>
  );
};

export default LayoutEdingButton;
