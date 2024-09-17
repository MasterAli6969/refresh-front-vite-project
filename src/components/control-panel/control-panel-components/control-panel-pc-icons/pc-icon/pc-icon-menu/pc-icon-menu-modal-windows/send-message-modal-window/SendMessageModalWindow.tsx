import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";

import CustomTextarea from "../../../../../../../../common/static-components/custom-textarea/CustomTextarea";
import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";

interface SendMessageModalWindowPropsType extends RedaxStateProps {}

const SendMessageModalWindow: FC<SendMessageModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Сообщение пользователю"
      specialText="GG.August"
    >
      <CustomTextarea plaseholder="Введите сообщение..." />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Отправить"
      />
    </CutomModalWindowUniversal>
  );
};

export default SendMessageModalWindow;
