import { FC } from "react";

import { CustomRadioButtonPropsType } from "./customRadioButton.interface";

import styles from "./custom_radio_button.module.scss";

const CustomRadioButton: FC<CustomRadioButtonPropsType> = ({
  title,
  radioLeft,
  redioRight,
}) => {
  return (
    <div className={styles.div}>
      <h3>{title}</h3>
      <div className={styles.subdiv}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            {radioLeft}
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            {redioRight}
          </label>
        </div>
      </div>
    </div>
  );
};

export default CustomRadioButton;
