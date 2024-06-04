import { FC, useState } from "react";

import classNames from "classnames";

import { CustomSwitchButtonProps } from "./customSwitchButton.interface";

import style from "./custom_switch_button.module.scss";

const CustomSwitchButton: FC<CustomSwitchButtonProps> = ({
  button1,
  button2,
  onButtonClick,
}) => {
  const [activeButton, setActiveButton] = useState<string | null>("system");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
    onButtonClick(buttonName);
  };

  return (
    <div className={style.div}>
      <button
        className={classNames({ [style._active]: activeButton === "system" })}
        onClick={() => handleClick("system")}
      >
        {button1}
      </button>
      <button
        className={classNames({ [style._active]: activeButton === "clients" })}
        onClick={() => handleClick("clients")}
      >
        {button2}
      </button>
    </div>
  );
};

export default CustomSwitchButton;
