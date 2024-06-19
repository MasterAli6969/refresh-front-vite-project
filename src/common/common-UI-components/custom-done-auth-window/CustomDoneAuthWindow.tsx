import { FC } from "react";

import CustomLogo from "../custom-logo/CustomLogo";
import CheckBlueMask from "../../../assets/img/CheckBlueMask.png";
import CustomButton from "../custom-button/CustomButton";

import { CustomDoneAuthWindowPropsType } from "./customDoneAuthWindow.interface";

import styles from "./custom_done_auth_window.module.scss";

const CustomDoneAuthWindow: FC<CustomDoneAuthWindowPropsType> = ({ label }) => {
  return (
    <div className={styles.div}>
      <div>
        <CustomLogo display="flex" isLabale={label} />
      </div>
      <div>
        <img src={CheckBlueMask} />
      </div>
      <div>
        <CustomButton color="light" text="Вернуться к экрану авторизации" />
      </div>
    </div>
  );
};

export default CustomDoneAuthWindow;
