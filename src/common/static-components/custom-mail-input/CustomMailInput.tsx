import { FC } from "react";
import classNames from "classnames";

import UserIcon from "../../../assets/icons/UserIcon.svg";

import { AuthInputPropsType } from "../../../commonTypes.interface";

import styles from "./custom_mail_input.module.scss";

const CustomMailInput: FC<AuthInputPropsType> = ({
  error,
  label,
  value,
  name,
  onChange,
}) => {
  return (
    <div className={styles.div}>
      <h3>{label}</h3>
      <div
        className={classNames(styles.subdiv, {
          [styles._error]: error === true,
        })}
      >
        <img src={UserIcon} />
        <input
          placeholder="Введите почту"
          type="email"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <p>Неверно введен адрес эл. почты</p>}
    </div>
  );
};

export default CustomMailInput;
