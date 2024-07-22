import { FC, useState } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../features/redux/hooks/reduxRootHooks";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomInput from "../../../static-components/custom-input/CustomInput";
import CustomButton from "../../../static-components/custom-button/CustomButton";

import {
  setInput,
  InputStatesType,
} from "../../../../features/redux/reducers/common-reducers/inputReduser";
import {
  setClick,
  OnClickStatesType,
} from "../../../../features/redux/reducers/common-reducers/onClickReduser";
import {
  setToggle,
  ToggleStateType,
} from "../../../../features/redux/reducers/common-reducers/toggleRedusers";

import styles from "./cutom_modal_window_type1.module.scss";

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
    (state) => state.input[redaxStateKey as keyof InputStatesType]
  );
  const dispatch = useAppDispatch();

  const [localInputValue, setLocalInputValue] = useState<string>(stateAddInput);

  const handleInputChange = (value: string) => {
    setLocalInputValue(value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      setInput({
        key: redaxStateKey as keyof InputStatesType,
        value: localInputValue,
      })
    );

    dispatch(
      setClick({ key: redaxStateKey as keyof OnClickStatesType, value: true })
    );

    dispatch(
      setToggle({ key: redaxStateKey as keyof ToggleStateType, value: false })
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
        value={localInputValue}
        onChange={handleInputChange}
      />
      <div>
        <CustomButton color="dark" text="Отмена" />
        <CustomButton type="submit" color="light" text="Сохранить" />
      </div>
    </form>
  );
};

export default CutomModalWindowType1;
