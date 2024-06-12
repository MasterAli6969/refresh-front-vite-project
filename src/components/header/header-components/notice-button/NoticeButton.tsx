import { FC } from "react";

import NoticesIcons from "../../../../assets/icons/NoticesIcons.svg";
import CustomModalButton from "../../../../common/common-UI-components/custom-modal-button/CustomModalButton";
import CustomNotice from "../../../../common/all-modal-windows/notice-window/NoticeWindow";

const NoticeButton: FC = () => {
  return (
    <div>
      <CustomModalButton
        icon={NoticesIcons}
        title="Сообщения"
        buttonLeft={CustomNotice}
        buttonRight={CustomNotice}
      />
    </div>
  );
};

export default NoticeButton;
