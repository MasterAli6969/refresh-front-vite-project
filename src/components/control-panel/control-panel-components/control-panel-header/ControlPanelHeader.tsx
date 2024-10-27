import { FC } from "react";
//ИКОНКИ
import MapIcon from "../../../../assets/icons/MapIcon.svg";
import ListIconMini from "../../../../assets/icons/ListIconMini.svg";
import OffModeStatus from "../../../../assets/icons/OffModeStatus.svg";
import ActiveModeStatus from "../../../../assets/icons/ActiveModeStatus.svg";
import StandbyModeSatus from "../../../../assets/icons/StandbyModeSatus.svg";
import WarningIconSmall from "../../../../assets/icons/WarningIconSmall.svg";
import WindowsLogoMiniIcons from "../../../../assets/icons/WindowsLogoMiniIcons.svg";
import SandTimerIcon from "../../../../assets/icons/SandTimerIcon.svg";

//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
import MessageButton from "./control-panel-header-components/message-button/MessageButton";
import NoticeButton from "./control-panel-header-components/notice-button/NoticeButton";
import AddNewUserButton from "./control-panel-header-components/add-new-user-button/AddNewUserButton";
import AddNewRoomsButton from "./control-panel-header-components/add-new-rooms-button/AddNewRoomsButton";
//СТИЛИ
import styles from "./control_panel_header.module.scss";
import CustomToggleButton from "../../../../common/static-components/custom-toggle-button/CustomToggleButton";

const ControlPanelHeader: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomButton color="dark">
          <img src={MapIcon} />
          <h4>Карта клуба</h4>
        </CustomButton>
        <CustomButton color="transparent">
          <img src={ListIconMini} />
          <h4>Вид списком</h4>
        </CustomButton>
        <MessageButton />
        <NoticeButton />
        <AddNewUserButton />
        <AddNewRoomsButton />
      </div>
      <div>
        <div>
          <img src={OffModeStatus} />
          <h5>9</h5>
        </div>
        <div>
          <img src={ActiveModeStatus} />
          <h5>9</h5>
        </div>
        <div>
          <img src={StandbyModeSatus} />
          <h5>9</h5>
        </div>
        <div>
          <img src={WarningIconSmall} />
          <h5>9</h5>
        </div>
        <div>
          <img src={WindowsLogoMiniIcons} />
          <h5>9</h5>
        </div>
        <div>
          <img src={SandTimerIcon} />
          <h5>9</h5>
        </div>
      </div>
    </div>
  );
};

export default ControlPanelHeader;
