import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../../../commonTypes.interface";
import CutomModalWindowUniversal from "../../../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomDualButtonYesNo from "../../../../../../../../../../../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomTextarea from "../../../../../../../../../../../../../common/static-components/inputs/custom-textarea/CustomTextarea";

export interface SendMessageModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const SendMessageModalWindow: FC<SendMessageModalWindowPropsType> = ({
  redaxStateKey,
  title,
  specialText,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={title}
      specialText={specialText}
    >
      <CustomTextarea placeholder="Введите сообщение..." />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Отправить"
      />
    </CutomModalWindowUniversal>
  );
};

export default SendMessageModalWindow;
