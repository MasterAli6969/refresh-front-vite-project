import { FC } from "react";

import NoticesIcons from "../../../../assets/icons/NoticesIcons.svg";
import CustomModalButton from "../../../../common/smart-component/custom-modal-button/CustomModalButton";
import SistemNoticeWindow from "./notice-windows/sistem-notice-window/SistemNoticeWindow";
import ClientNoticeWindow from "./notice-windows/client-notice-window/ClientNoticeWindow";

const NoticeButton: FC = () => {
  return (
    <div>
      <CustomModalButton
        icon={NoticesIcons}
        title="Уведомления"
        buttonLeft={SistemNoticeWindow}
        buttonRight={ClientNoticeWindow}
      />
    </div>
  );
};

export default NoticeButton;
