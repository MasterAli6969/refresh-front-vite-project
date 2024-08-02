import { FC, useState } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../features/redux/hooks/reduxRootHooks";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomInput from "../../../static-components/custom-input/CustomInput";

import { setDynamicInput } from "../../../../features/redux/reducers/common-reducers/inputDynamicReduser";

import styles from "./cutom_modal_window_type1.module.scss";
import {
  resetModals,
  setToggleDynamic,
} from "../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import {
  resetOnClickDynamic,
  setOnClickDynamic,
} from "../../../../features/redux/reducers/common-reducers/onClickDynamicReduser";
import CustomDualButtonYesNo from "../../../static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

export interface CutomModalWindowType1PropsType1 extends RedaxStateProps {
  title: string;
  specialText?: string;
}

const CutomModalWindowType1: FC<CutomModalWindowType1PropsType1> = ({
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
    <form onSubmit={handleSubmit} className={styles.div}>
      <CustomModalCloseHead
        redaxStateKey={redaxStateKey}
        text={title}
        specialText={specialText}
      />
      <CustomInput
        label="Название комнаты"
        placeholder="Введите новое название комнаты"
        value={localInputValue || ""}
        onChange={handleInputChange}
      />
      <div>
        <CustomDualButtonYesNo
          redaxStateKey={redaxStateKey}
          buttonRightText="Сохранить"
          isSubmit={true}
        />
      </div>
    </form>
  );
};

export default CutomModalWindowType1;
