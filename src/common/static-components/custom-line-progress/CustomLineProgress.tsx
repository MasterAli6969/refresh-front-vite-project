import { FC } from "react";

import styles from "./custom_line_progress.module.scss";

export interface CustomLineProgressPropsType {
  text: string;
  valuePropgress: string;
}

const CustomLineProgress: FC<CustomLineProgressPropsType> = ({
  text,
  valuePropgress,
}) => {
  return (
    <div className={styles.div}>
      <h3>{text}</h3>
      <div
        className="progress"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar"
          style={{ width: `${valuePropgress}` }}
        ></div>
      </div>
    </div>
  );
};

export default CustomLineProgress;
