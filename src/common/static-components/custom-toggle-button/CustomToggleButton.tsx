import { FC, useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./custom_toggle_button.module.scss";

export interface CustomToggleButtonPropsType {
  buttonsText: string[];
  onToggleChange?: (activeItem: string) => void; // Пропс для передачи наверх
}

const CustomToggleButton: FC<CustomToggleButtonPropsType> = ({
  buttonsText,
  onToggleChange,
}) => {
  const [activeIndex, setActiveIndex] = useState<string>(buttonsText[0]);

  const handleToggleClick = (text: string) => {
    setActiveIndex(text);
    if (onToggleChange) {
      onToggleChange(text);
    }
  };

  useEffect(() => {
    if (onToggleChange) {
      onToggleChange(activeIndex);
    }
  }, [activeIndex, onToggleChange]);

  return (
    <div className={styles.div}>
      {!buttonsText || buttonsText.length === 0 ? (
        <span>Ожидание...</span>
      ) : (
        buttonsText.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => handleToggleClick(item)}
              className={classNames(styles.button, {
                [styles._active]: activeIndex === item,
              })}
            >
              {item}
            </button>
          );
        })
      )}
    </div>
  );
};

export default CustomToggleButton;
