import { FC, useState } from "react";

import classNames from "classnames";

import style from "./custom_switch_button.module.scss";

export interface CustomSwitchButtonProps {
  buttonLeft: string;
  componentLeft: FC;
  buttonRight: string;
  componentRight: FC;
}

const CustomSwitchButton: FC<CustomSwitchButtonProps> = ({
  buttonLeft,
  componentLeft: ComponentLeft,
  buttonRight,
  componentRight: ComponentRight,
}) => {
  const [activeButton, setActiveButton] = useState<string | null>("left");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <div className={style.div}>
      <div className={style.subdiv_buttons}>
        <button
          className={classNames({ [style._active]: activeButton === "left" })}
          onClick={() => handleClick("left")}
        >
          {buttonLeft}
        </button>
        <button
          className={classNames({ [style._active]: activeButton === "right" })}
          onClick={() => handleClick("right")}
        >
          {buttonRight}
        </button>
      </div>
      <div className={style.subdiv_contents}>
        <div>{activeButton === "left" && <ComponentLeft />}</div>
        <div>{activeButton === "right" && <ComponentRight />}</div>
      </div>
    </div>
  );
};

export default CustomSwitchButton;
