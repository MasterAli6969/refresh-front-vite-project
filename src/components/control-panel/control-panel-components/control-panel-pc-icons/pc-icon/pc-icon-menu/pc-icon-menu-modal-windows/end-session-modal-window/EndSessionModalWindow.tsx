import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";

import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-universal/CutomModalWindowUniversal";

interface EndSessionModalWindowPropsType extends RedaxStateProps {}

const EndSessionModalWindow: FC<EndSessionModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Завершение сессии пользователя"
      specialText="GG.August"
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
