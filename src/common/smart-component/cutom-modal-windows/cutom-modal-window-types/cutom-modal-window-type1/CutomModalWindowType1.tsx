import { FC, useState } from "react";
import { RedaxStateProps } from "../../../../../commonTypes.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../features/redux/hooks/reduxRootHooks";

import CustomInput from "../../../../static-components/custom-input/CustomInput";

import { setDynamicInput } from "../../../../../features/redux/reducers/common-reducers/inputDynamicReduser";

import {
  resetModals,
  setToggleDynamic,
} from "../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import {
  resetOnClickDynamic,
  setOnClickDynamic,
} from "../../../../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import CustomDualButtonYesNo from "../../../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CutomModalWindowUniversal from "../../cutom-modal-window-universal/CutomModalWindowUniversal";

export interface CutomModalWindowType1PropsType extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const CutomModalWindowType1: FC<CutomModalWindowType1PropsType> = ({
  redaxStateKey,
  title,
  specialText,
}) => {
  const stateAddInput = useAppSelector(
    (state) => state.inputDynamic.inputStatesDynamic[redaxStateKey]
  );
  const dispatch = useAppDispatch();

  const [localInputValue, setLocalInputValue] = useState<string>(stateAddInput);

  const handleInputChange = (value: string) => {
    setLocalInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      setDynamicInput({
        key: redaxStateKey,
        value: localInputValue,
      })
    );

    dispatch(
      setOnClickDynamic({
        key: redaxStateKey,
        value: true,
      }),
      resetOnClickDynamic()
    );

    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      }),
      resetModals()
    );
  };

  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title={title}
      specialText={specialText}
      onSubmit={handleSubmit}
      components={[
        () => (
          <CustomInput
            label="Название комнаты"
            placeholder="Введите новое название комнаты"
            value={localInputValue || ""}
            onChange={handleInputChange}
          />
        ),
        () => (
          <CustomDualButtonYesNo
            redaxStateKey={redaxStateKey}
            buttonRightText="Сохранить"
            isSubmit={true}
          />
        ),
      ]}
    />
  );
};

export default CutomModalWindowType1;
