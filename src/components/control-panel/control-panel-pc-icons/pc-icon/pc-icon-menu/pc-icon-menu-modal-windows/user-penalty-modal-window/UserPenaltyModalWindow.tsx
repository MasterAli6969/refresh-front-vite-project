import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../commonTypes.interface";

import CustomModalCloseHead from "../../../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomTextarea from "../../../../../../../common/static-components/custom-textarea/CustomTextarea";
import CustomCounterInput from "../../../../../../../common/static-components/custom-counter-input/CustomCounterInput";

import styles from "./user_penalty_modal_window.module.scss";
import CustomDualButtonYesNo from "../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

export interface UserPenaltyModalWindowPropsType extends RedaxStateProps {}

const UserPenaltyModalWindow: FC<UserPenaltyModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
          text="Штраф пользователя"
          specialText="Quest"
        />
      </div>
      <div>
        <CustomCounterInput label="Штрафное время" />
      </div>
      <div>
        <CustomCounterInput label="Сумма штрафа" />
      </div>
      <div>
        <CustomTextarea
          label="Комментарий к смене"
          plaseholder="Введите комментарий"
        />
      </div>
      <div>
        <CustomDualButtonYesNo
          redaxStateKey={redaxStateKey}
          buttonRightText="Готово"
        />
      </div>
    </div>
  );
};

export default UserPenaltyModalWindow;
