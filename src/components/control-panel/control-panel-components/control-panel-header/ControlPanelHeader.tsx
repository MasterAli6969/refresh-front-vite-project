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

//МОДУЛИ ДЛЯ РАБОТЫ
import CustomButton from "../../../../common/static-components/custom-button/CustomButton";
import MessageButton from "./control-panel-header-components/message-button/MessageButton";
import NoticeButton from "./control-panel-header-components/notice-button/NoticeButton";
//СТИЛИ
import styles from "./control_panel_header.module.scss";
import AddNewUserBottom from "./control-panel-header-components/add-new-user-bottom/AddNewUserBottom";
import AddNewRoomsButton from "./control-panel-header-components/add-new-rooms-button/AddNewRoomsButton";

const ControlPanelHeader: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomButton icon={MapIcon} text="Карта клуба" color="dark" />
        <CustomButton
          icon={ListIconMini}
          text="Вид списком"
          color="transparent"
        />
        <MessageButton />
        <NoticeButton />
        <AddNewUserBottom />
        <AddNewRoomsButton />
      </div>
      <div>
        <CustomButton color="transparent" icon={OffModeStatus} text="9" />
        <CustomButton color="transparent" icon={ActiveModeStatus} text="9" />
        <CustomButton color="transparent" icon={StandbyModeSatus} text="9" />
        <CustomButton color="transparent" icon={WarningIconSmall} text="9" />
        <CustomButton
          color="transparent"
          icon={WindowsLogoMiniIcons}
          text="9"
        />
        <CustomButton color="transparent" icon={SandTimerIcon} text="9" />
      </div>
    </div>
  );
};

export default ControlPanelHeader;
