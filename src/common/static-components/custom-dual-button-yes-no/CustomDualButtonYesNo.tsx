import { FC } from "react";

import CustomButton from "../custom-button/CustomButton";

import styles from "./custom_dual_button_yes_no.module.scss";
import { useAppDispatch } from "../../../features/redux/hooks/reduxRootHooks";
import {
  setToggle,
  ToggleStateType,
} from "../../../features/redux/reducers/common-reducers/toggleRedusers";

interface CustomDualButtonYesNoPropsType {
  redaxStateKey: string;
  buttonRightText: string;
}

const CustomDualButtonYesNo: FC<CustomDualButtonYesNoPropsType> = ({
  redaxStateKey,
  buttonRightText,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      setToggle({ key: redaxStateKey as keyof ToggleStateType, value: false })
    );
  };

  return (
    <div className={styles.div}>
      <CustomButton onClick={handleClose} color="dark" text="Отмена" />
      <CustomButton color="light" text={buttonRightText} />
    </div>
  );
};

export default CustomDualButtonYesNo;
