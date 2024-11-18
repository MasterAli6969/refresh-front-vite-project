import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import { RedaxStateProps } from "../../../../../commonTypes.interface";
import { useAppDispatch } from "../../../../../features/redux/hooks/reduxRootHooks";
import { setToggleDynamic } from "../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CutomModalWindowUniversal from "../../../../../common/smart-component/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomInput from "../../../../../common/static-components/inputs/custom-input/CustomInput";
import CustomDualButtonYesNo from "../../../../../common/static-components/buttons/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CustomTextarea from "../../../../../common/static-components/inputs/custom-textarea/CustomTextarea";

export interface OpenShiftModalWindowPropsType extends RedaxStateProps {
  redaxShiftState: string;
}

const OpenShiftModalWindow: FC<OpenShiftModalWindowPropsType> = ({
  redaxStateKey,
  redaxShiftState,
}) => {
  const dispatch = useAppDispatch();

  const handleClickOpenisShiftStatus = () => {
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
  };

  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={"Открытие смены"}
    >
      <div>
        <CustomInput
          label="Денежный остаток"
          placeholder="Введите сумму в кассе при открытии смены"
        />
      </div>
      <CustomTextarea
        label="Комментарий к смене"
        placeholder="Укажите необходимые сведения, если требуется..."
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxShiftState}
        buttonRightText="Открыть смену"
        onClickRightButton={handleClickOpenisShiftStatus}
      />
    </CutomModalWindowUniversal>
  );
};

export default OpenShiftModalWindow;
