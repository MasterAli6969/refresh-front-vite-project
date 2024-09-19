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

const ControlPanelHeader: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomButton color="dark">
          <img src={MapIcon} />
          <p>Карта клуба</p>
        </CustomButton>
        <CustomButton color="transparent">
          <img src={ListIconMini} />
          <p>Вид списком</p>
        </CustomButton>
        <MessageButton />
        <NoticeButton />
        <AddNewUserButton />
        <AddNewRoomsButton />
      </div>
      <div>
        <CustomButton imgSize="1rem" color="transparent">
          <img src={OffModeStatus} />
          <p>9</p>
        </CustomButton>
        <CustomButton imgSize="1rem" color="transparent">
          <img src={ActiveModeStatus} />
          <p>9</p>
        </CustomButton>
        <CustomButton imgSize="1rem" color="transparent">
          <img src={StandbyModeSatus} />
          <p>9</p>
        </CustomButton>
        <CustomButton imgSize="0.6rem" color="transparent">
          <img src={WarningIconSmall} />
          <p>9</p>
        </CustomButton>
        <CustomButton imgSize="0.6rem" color="transparent">
          <img src={WindowsLogoMiniIcons} />
          <p>9</p>
        </CustomButton>
        <CustomButton imgSize="0.6rem" color="transparent">
          <img src={SandTimerIcon} />
          <p>9</p>
        </CustomButton>
      </div>
    </div>
  );
};

export default ControlPanelHeader;
