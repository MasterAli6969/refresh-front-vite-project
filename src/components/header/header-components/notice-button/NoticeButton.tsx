import { FC } from "react";

import NoticesIcons from "../../../../assets/icons/NoticesIcons.svg";
import CustomModalButton from "../../../../common/common-UI-components/custom-modal-components/custom-modal-button/CustomModalButton";
import SistemNoticeWindow from "../../../../common/all-modal-windows/notice-windows/sistem-notice-window/SistemNoticeWindow";
import ClientNoticeWindow from "../../../../common/all-modal-windows/notice-windows/client-notice-window/ClientNoticeWindow";

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
