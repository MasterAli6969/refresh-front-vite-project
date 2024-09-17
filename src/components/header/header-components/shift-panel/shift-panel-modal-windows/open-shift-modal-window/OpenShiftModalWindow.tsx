import { FC } from "react";
import { RedaxStateProps } from "../../../../../../commonTypes.interface";
import { useAppDispatch } from "../../../../../../features/redux/hooks/reduxRootHooks";
import { setToggleDynamic } from "../../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import CutomModalWindowUniversal from "../../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomDualTextDisplay from "../../../../../../common/static-components/custom-dual-text-display/CustomDualTextDisplay";
import CustomInput from "../../../../../../common/static-components/custom-input/CustomInput";
import CustomTextarea from "../../../../../../common/static-components/custom-textarea/CustomTextarea";
import CustomButton from "../../../../../../common/static-components/custom-button/CustomButton";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ

export interface OpenShiftModalWindowPropsType extends RedaxStateProps {
  shiftType: boolean;
  redaxShiftState: string;
  title: string;
  rightButton: string;
}

const OpenShiftModalWindow: FC<OpenShiftModalWindowPropsType> = ({
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
    <CutomModalWindowUniversal redaxStateKey={redaxStateKey} title={title}>
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
      <CustomTextarea
        label="Комментарий к смене"
        plaseholder="Введите комментарий"
      />
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
    </CutomModalWindowUniversal>
  );
};

export default OpenShiftModalWindow;
