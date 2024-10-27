import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import { CutomModalWindowUniversalDefaultPropsType } from "../../../../../../../../../../../../../commonTypes.interface";
import CutomModalWindowUniversal from "../../../../../../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomDualButtonYesNo from "../../../../../../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

export interface EndSessionModalWindowPropsType
  extends CutomModalWindowUniversalDefaultPropsType {}

const EndSessionModalWindow: FC<EndSessionModalWindowPropsType> = ({
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
      <h4>Вы уверены что хотите завершить сеанс?</h4>
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Завершить"
      />
    </CutomModalWindowUniversal>
  );
};

export default EndSessionModalWindow;
