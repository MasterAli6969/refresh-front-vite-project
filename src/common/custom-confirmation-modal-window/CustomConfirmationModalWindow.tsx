import { FC } from "react";

import CustomButton from "../custom-button/CustomButton";

import { CustomConfirmationModalWindowPropType } from "./customConfirmationModalWindow.interface";

import styles from "./custom_confirmation_modal_window.module.scss";

const CustomConfirmationModalWindow: FC<
  CustomConfirmationModalWindowPropType
> = ({ text }) => {
  return (
    <div className={styles.div}>
      <h3>{text}</h3>
      <div>
        <CustomButton color="light" text="Да" />
        <CustomButton color="dark" text="Нет" />
      </div>
    </div>
  );
};

export default CustomConfirmationModalWindow;
