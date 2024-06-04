import { FC } from "react";

import NoticesIcons from "../../../../assets/icons/NoticesIcons.svg";
import CustomModalButton from "../../../../common/custom-modal-button/CustomModalButton";
import CustomNotice from "../../../../common/custom-notice/CustomNotice";

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
