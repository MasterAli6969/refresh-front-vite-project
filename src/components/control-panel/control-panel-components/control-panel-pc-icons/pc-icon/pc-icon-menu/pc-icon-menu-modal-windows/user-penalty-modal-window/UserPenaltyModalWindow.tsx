import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";

import CustomTextarea from "../../../../../../../../common/static-components/custom-textarea/CustomTextarea";
import CustomCounterInput from "../../../../../../../../common/static-components/custom-counter-input/CustomCounterInput";

import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";

export interface UserPenaltyModalWindowPropsType extends RedaxStateProps {}

const UserPenaltyModalWindow: FC<UserPenaltyModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Штраф пользователя"
      specialText="Quest"
    >
      <CustomCounterInput label="Штрафное время" />
      <CustomTextarea label="Комментарий" plaseholder="Введите комментарий" />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Готово"
      />
    </CutomModalWindowUniversal>
  );
};

export default UserPenaltyModalWindow;