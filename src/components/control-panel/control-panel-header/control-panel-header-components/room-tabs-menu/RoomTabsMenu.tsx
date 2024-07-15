import { FC } from "react";

import CutomModalWindowType1 from "../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-type1/CutomModalWindowType1";

import styles from "./room_tabs_menu.module.scss";
import CustomRightModalOpenWrapper from "../../../../../common/smart-component/custom-right-modal-open-wrapper/CustomRightModalOpenWrapper";

const RoomTabsMenu: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomRightModalOpenWrapper openComponents={CutomModalWindowType1}>
          <p>Переименовать</p>
        </CustomRightModalOpenWrapper>
      </div>
      <div>
        <CustomRightModalOpenWrapper openComponents={CutomModalWindowType1}>
          <p>Удалить</p>
        </CustomRightModalOpenWrapper>
      </div>
    </div>
  );
};

export default RoomTabsMenu;
