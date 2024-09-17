import { FC } from "react";

import CustomDualButtonYesNo from "../custom-dual-button-yes-no/CustomDualButtonYesNo";

import { RedaxStateProps } from "../../../commonTypes.interface";

import styles from "./custom_confirmation_modal_window.module.scss";

export interface CustomConfirmationModalWindowPropType extends RedaxStateProps {
  text: string;
}

const CustomConfirmationModalWindow: FC<
  CustomConfirmationModalWindowPropType
> = ({ text, redaxStateKey }) => {
  return (
    <div className={styles.div}>
      <h3>{text}</h3>
      <div>
        <CustomDualButtonYesNo
          buttonRightText="Да"
          buttonLeftText="Нет"
          redaxStateKey={redaxStateKey}
        />
      </div>
    </div>
  );
};

export default CustomConfirmationModalWindow;
