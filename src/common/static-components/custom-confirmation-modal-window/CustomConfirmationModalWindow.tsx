import { FC } from "react";

import CustomButton from "../custom-button/CustomButton";

import styles from "./custom_confirmation_modal_window.module.scss";

export interface CustomConfirmationModalWindowPropType {
  text: string;
}

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
