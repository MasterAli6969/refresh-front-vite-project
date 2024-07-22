import { FC } from "react";
import { RedaxStateProps } from "../../../../commonTypes.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../features/redux/hooks/reduxRootHooks";

import CustomModalCloseHead from "../../custom-modal-close-head/CustomModalCloseHead";
import CustomInput from "../../../static-components/custom-input/CustomInput";
import CustomButton from "../../../static-components/custom-button/CustomButton";

import styles from "./cutom_modal_window_type1.module.scss";
import {
  setInput,
  InputStatesType,
} from "../../../../features/redux/reducers/common-reducers/inputReduser";

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

  const handleInputChange = (value: string) => {
    dispatch(
      setInput({ key: redaxStateKey as keyof InputStatesType, value: value })
    );
  };

  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
          text={title}
          specialText={specialText}
        />
      </div>
      <div>
        <CustomInput
          label="Название комнаты"
          placeholder="Введите новое название комнаты"
          value={stateAddInput}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <CustomButton color="dark" text="Отмена" />
        <CustomButton color="light" text="Сохранить" />
      </div>
    </div>
  );
};

export default CutomModalWindowType1;
