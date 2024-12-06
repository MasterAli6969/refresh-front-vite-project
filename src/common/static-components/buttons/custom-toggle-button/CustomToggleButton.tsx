import { FC, useState, useEffect } from "react";
import CustomButton from "../custom-button/CustomButton";
//СТИЛИ
import styles from "./custom_toggle_button.module.scss";

export interface CustomToggleButtonPropsType {
  label?: string;
  buttonsText: string[];
  onToggleChange?: (activeItem: string) => void; // Пропс для передачи наверх
}

const CustomToggleButton: FC<CustomToggleButtonPropsType> = ({
  label,
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
      {label && <h5>{label}</h5>}
      <div className={styles.subdiv}>
        {!buttonsText || buttonsText.length === 0 ? (
          <span>Ожидание...</span>
        ) : (
          buttonsText.map((item, index) => {
            return (
              <CustomButton
                key={index}
                isActive={activeIndex === item}
                color={activeIndex !== item ? "transparent" : undefined}
                onClick={() => handleToggleClick(item)}
              >
                {item}
              </CustomButton>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CustomToggleButton;
