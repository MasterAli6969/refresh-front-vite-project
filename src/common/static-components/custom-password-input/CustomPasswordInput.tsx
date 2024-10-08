import { FC, useState } from "react";
import classNames from "classnames";

import { AuthInputPropsType } from "../../../commonTypes.interface";
import PassVisibleIcon from "../../../assets/icons-svg-components/auth-dynamic-icon/PassVisibleIcon";

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

  const [focus, setFocus] = useState<boolean>(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <div
        className={classNames(styles.subdiv, {
          [styles._error]: error === true,
          [styles._active]: focus === true,
        })}
      >
        <div>
          <input
            type={inputType}
            name={name}
            placeholder="Введите пароль"
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={onChange}
          />
        </div>
        <div onClick={togglePasswordVisibility}>
          <PassVisibleIcon active={inputType} />
        </div>
      </div>
      {error && <p>Пароль не совпал</p>}
    </div>
  );
};

export default CustomPasswordInput;
