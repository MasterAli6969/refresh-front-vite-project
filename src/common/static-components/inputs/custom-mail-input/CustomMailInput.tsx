import { FC, useState } from "react";
import classNames from "classnames";

import { AuthInputPropsType } from "../../../../commonTypes.interface";

import styles from "./custom_mail_input.module.scss";

const CustomMailInput: FC<AuthInputPropsType> = ({
  error,
  label,
  value,
  name,
  onChange,
}) => {
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
          [styles._error]: error,
          [styles._active]: focus,
        })}
      >
        <input
          placeholder="Введите адрес электронной почты"
          type="email"
          name={name}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
        />
      </div>
      {error && <p>Неверно введен адрес эл. почты</p>}
    </div>
  );
};

export default CustomMailInput;
