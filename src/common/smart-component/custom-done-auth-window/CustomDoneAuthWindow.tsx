import { FC } from "react";
import { useNavigate } from "react-router-dom";

import CustomLogo from "../../static-components/custom-logo/CustomLogo";
import CheckBlueMask from "../../../assets/img/CheckBlueMask.png";
import CustomButton from "../../static-components/custom-button/CustomButton";

import styles from "./custom_done_auth_window.module.scss";

export interface CustomDoneAuthWindowPropsType {
  label: string;
  buttonText: string;
  redirectRout: string;
}

const CustomDoneAuthWindow: FC<CustomDoneAuthWindowPropsType> = ({
  label,
  buttonText,
  redirectRout,
}) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate(redirectRout);
  };

  return (
    <div className={styles.div}>
      <div>
        <CustomLogo display="flex" isLabale={label} />
      </div>
      <div>
        <img src={CheckBlueMask} />
      </div>
      <div>
        <CustomButton
          onClick={handleRedirect}
          color="light"
          text={buttonText}
        />
      </div>
    </div>
  );
};

export default CustomDoneAuthWindow;
