import { FC } from "react";

import styles from "./custom_radio_button.module.scss";

export interface CustomRadioButtonPropsType {
  title?: string;
  radioLeft: string;
  redioRight: string;
}

const CustomRadioButton: FC<CustomRadioButtonPropsType> = ({
  title,
  radioLeft,
  redioRight,
}) => {
  return (
    <div className={styles.div}>
      <h3>{title}</h3>
      <div className={styles.subdiv}>
        <h4>{radioLeft}</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
        </div>
        <h4>{redioRight}</h4>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
        </div>
      </div>
    </div>
  );
};

export default CustomRadioButton;
