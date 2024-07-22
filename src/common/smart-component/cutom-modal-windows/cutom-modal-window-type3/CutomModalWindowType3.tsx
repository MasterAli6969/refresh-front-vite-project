import { FC } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomInput from "../../../static-components/custom-input/CustomInput";
import CustomButton from "../../../static-components/custom-button/CustomButton";
import CustomTextarea from "../../../static-components/custom-textarea/CustomTextarea";
import CustomDualTextDisplay from "../../../static-components/custom-dual-text-display/CustomDualTextDisplay";

import styles from "./cutom_modal_window_type3.module.scss";
import { useAppDispatch } from "../../../../features/redux/hooks/reduxRootHooks";
import {
  setToggle,
  ToggleStateType,
} from "../../../../features/redux/reducers/common-reducers/toggleRedusers";

export interface CutomModalWindowType3PropsType extends RedaxStateProps {
  shiftType: boolean;
  redaxShiftState: string;
  title: string;
  rightButton: string;
}

const CutomModalWindowType3: FC<CutomModalWindowType3PropsType> = ({
  shiftType,
  redaxStateKey,
  redaxShiftState,
  title,
  rightButton,
}) => {
  const dispatch = useAppDispatch();

  const handleClickOpenisShiftStatus = () => {
    if (!shiftType) {
      dispatch(
        setToggle({
          key: redaxShiftState as keyof ToggleStateType,
          value: true,
        })
      );
      dispatch(
        setToggle({ key: redaxStateKey as keyof ToggleStateType, value: false })
      );
    } else {
      dispatch(
        setToggle({
          key: redaxShiftState as keyof ToggleStateType,
          value: false,
        })
      );
      dispatch(
        setToggle({ key: redaxStateKey as keyof ToggleStateType, value: false })
      );
    }
  };

  const handleClickCancelisShiftStatus = () => {
    dispatch(
      setToggle({ key: redaxStateKey as keyof ToggleStateType, value: false })
    );
  };

  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead redaxStateKey={redaxStateKey} text={title} />
      </div>
      {shiftType ? (
        <CustomDualTextDisplay text1="Начало смены" text2="05.05.2005 13:00" />
      ) : (
        <div>
          <CustomInput
            label="Сумма на начало смены"
            plaseholder="Введите сумму"
          />
        </div>
      )}
      <div>
        <CustomTextarea
          label="Комментарий к смене"
          plaseholder="Введите комментарий"
        />
      </div>
      <div>
        <CustomButton
          onClick={handleClickCancelisShiftStatus}
          color="dark"
          text="Отмена"
        />
        <CustomButton
          onClick={handleClickOpenisShiftStatus}
          color="light"
          text={rightButton}
        />
      </div>
    </div>
  );
};

export default CutomModalWindowType3;
