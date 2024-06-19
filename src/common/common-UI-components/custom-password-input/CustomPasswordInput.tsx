import { FC, useState } from "react";
import classNames from "classnames";

import KeyIcon from "../../../assets/icons/KeyIcon.svg";
import EyeBlueIcon from "../../../assets/icons/EyeBlueIcon.svg";

import { AuthInputPropsType } from "../../../commonTypes.interface";

import styles from "./custom_password_input.module.scss";

const CustomPasswordInput: FC<AuthInputPropsType> = ({
  label,
  error,
  name,
  value,
  onChange,
}) => {
  const [inputType, setInputType] = useState<string>("password");

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <div
        className={classNames(styles.subdiv, {
          [styles._error]: error === true,
        })}
      >
        <div>
          <img src={KeyIcon} />
          <input
            type={inputType}
            name={name}
            placeholder="Введите пароль"
            value={value}
            onChange={onChange}
          />
        </div>
        <img onClick={togglePasswordVisibility} src={EyeBlueIcon} />
      </div>
      {error && <p>Неверно введен адрес эл. почты</p>}
    </div>
  );
};

export default CustomPasswordInput;
