import { FC } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomInput from "../../../static-components/custom-input/CustomInput";
import CustomButton from "../../../static-components/custom-button/CustomButton";
import CustomTextarea from "../../../static-components/custom-textarea/CustomTextarea";
import CustomDualTextDisplay from "../../../static-components/custom-dual-text-display/CustomDualTextDisplay";

import styles from "./cutom_modal_window_type3.module.scss";
import { useAppDispatch } from "../../../../features/redux/hooks/reduxRootHooks";
import { setToggleDynamic } from "../../../../features/redux/reducers/common-reducers/dynamic-component-reducers/toggleDynamicReduser";

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
        setToggleDynamic({
          id: redaxShiftState,
          value: true,
        })
      );
      dispatch(
        setToggleDynamic({
          id: redaxStateKey,
          value: false,
        })
      );
    } else {
      dispatch(
        setToggleDynamic({
          id: redaxShiftState,
          value: false,
        })
      );
      dispatch(
        setToggleDynamic({
          id: redaxStateKey,
          value: false,
        })
      );
    }
  };

  const handleClickCancelisShiftStatus = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      })
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
            placeholder="Введите сумму"
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
