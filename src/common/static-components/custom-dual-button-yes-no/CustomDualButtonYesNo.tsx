import { FC } from "react";

import CustomButton from "../custom-button/CustomButton";

import { useAppDispatch } from "../../../features/redux/hooks/reduxRootHooks";

import { setToggleDynamic } from "../../../features/redux/reducers/common-reducers/toggleDynamicReduser";

import styles from "./custom_dual_button_yes_no.module.scss";

interface CustomDualButtonYesNoPropsType {
  redaxStateKey: string | number;
  buttonRightText: string;
  buttonLeftText?: string;
  isSubmit?: boolean;
  onClickRightButton?: () => void;
}

const CustomDualButtonYesNo: FC<CustomDualButtonYesNoPropsType> = ({
  redaxStateKey,
  buttonRightText,
  buttonLeftText,
  isSubmit,
  onClickRightButton,
}) => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      })
    );
  };

  return (
    <div className={styles.div}>
      <CustomButton onClick={handleClose} color="dark">
        {buttonLeftText ? buttonLeftText : "Отмена"}
      </CustomButton>
      <CustomButton
        type={isSubmit ? "submit" : "button"}
        onClick={onClickRightButton}
        color="light"
      >
        {buttonRightText}
      </CustomButton>
    </div>
  );
};

export default CustomDualButtonYesNo;
