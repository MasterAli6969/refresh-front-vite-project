import { FC, useState, useEffect, useRef } from "react";
import classNames from "classnames";

import CustomSwitchButton from "../../custom-switch-button/CustomSwitchButton";

import { CustomModalButtonPropsType } from "./customModalButton.interface";

import styles from "./custom_modal_button.module.scss";

const CustomModalButton: FC<CustomModalButtonPropsType> = ({
  icon,
  title,
  buttonLeft: ButtonLeft,
  buttonRight: ButtonRight,
}) => {
  const [activeButton, setActiveButton] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setActiveButton(!activeButton);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setActiveButton(false);
    }
  };

  useEffect(() => {
    if (activeButton) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeButton]);

  return (
    <div className={styles.div}>
      <button onClick={handleClick} className={styles.button}>
        <img src={icon} />
      </button>
      <div
        ref={modalRef}
        className={classNames(styles.modal_icon, {
          [styles._active]: activeButton,
        })}
      >
        <div className={styles.modal_div}>
          <h3>{title}</h3>
          <div>
            <CustomSwitchButton
              buttonLeft="Сотрудники"
              componentLeft={ButtonLeft}
              buttonRight="Клиенты"
              componentRight={ButtonRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModalButton;
