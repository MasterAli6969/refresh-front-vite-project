import { FC } from "react";

import { CustomDualTextDisplayPropsType } from "./customDualTextDisplay.interface";

const CustomDualTextDisplay: FC<CustomDualTextDisplayPropsType> = ({
  text1,
  text2,
}) => {
  return (
    <div>
      <h3 style={{ marginBottom: "0.5rem" }}>{text1}</h3>
      <h3>{text2}</h3>
    </div>
  );
};

export default CustomDualTextDisplay;
