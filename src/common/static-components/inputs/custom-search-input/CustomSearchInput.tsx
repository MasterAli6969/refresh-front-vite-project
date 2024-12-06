import { FC, useEffect, useRef, useState } from "react";
import classNames from "classnames";
// Иконки
import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import CloseIcon from "../../../../assets/icons/CloseIcon.svg";
// Стили
import styles from "./custom_search_input.module.scss";

interface CustomSearchInputPropsTypes {
  customWidth?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  isFocused?: boolean;
  setIsFocused?: (value: boolean) => void;
}

const CustomSearchInput: FC<CustomSearchInputPropsTypes> = ({
  customWidth = "100%",
  placeholder,
  value,
  onChange,
  isFocused,
  setIsFocused,
}) => {
  const [isDefFocused, setIsDefFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const isActive = isFocused ?? isDefFocused;

  const handleFocus = () => {
    setIsFocused?.(true);
    if (!setIsFocused) setIsDefFocused(true);
  };

  const handleSearchClear = () => {
    setIsFocused?.(false);
    setIsDefFocused(false);
    onChange?.("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsFocused?.(false);
      if (!setIsFocused) setIsDefFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{ width: `${customWidth}` }}
      ref={inputRef}
      className={classNames(styles.div, {
        [styles.div_focuse]: isActive,
      })}
    >
      <img src={SearchIcon} alt="Search Icon" />
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder || ""}
        type="text"
        onFocus={handleFocus}
      />
      {isActive && (
        <img
          onClick={handleSearchClear}
          src={CloseIcon}
          alt="Clear Icon"
          className={styles.clear_icon}
        />
      )}
      <div className={styles.search_menu}></div>
    </div>
  );
};

export default CustomSearchInput;
