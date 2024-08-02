import { FC } from "react";

import CustomButton from "../custom-button/CustomButton";

import styles from "./custom_dual_button_yes_no.module.scss";
import { useAppDispatch } from "../../../features/redux/hooks/reduxRootHooks";

import { setToggleDynamic } from "../../../features/redux/reducers/common-reducers/toggleDynamicReduser";

interface CustomDualButtonYesNoPropsType {
  redaxStateKey: string | number;
  buttonRightText: string;
  isSubmit?: boolean;
  onClickRightButton?: () => void;
}

const CustomDualButtonYesNo: FC<CustomDualButtonYesNoPropsType> = ({
  redaxStateKey,
  buttonRightText,
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
      <CustomButton onClick={handleClose} color="dark" text="Отмена" />
      <CustomButton
        type={isSubmit ? "submit" : "button"}
        onClick={onClickRightButton}
        color="light"
        text={buttonRightText}
      />
    </div>
  );
};

export default CustomDualButtonYesNo;
