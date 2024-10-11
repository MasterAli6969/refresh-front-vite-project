import { FC, useState, useEffect, useRef } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
import classNames from "classnames";
//МОДУЛИ ДЛЯ РЕНДЕРА
import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import SearchMenu from "./search-input-components/search-menu/SearchMenu";
//ИНОКНКИ
import CloseIcon from "../../../../assets/icons/CloseIcon.svg";
//СТИЛИ
import styles from "./search_input.module.scss";

const SearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  const handleSearchClear = () => {
    setSearch("");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef}>
      <div
        className={classNames(styles.div, { [styles.div_focuse]: isFocused })}
      >
        <img src={SearchIcon} />
        <input
          value={search}
          onChange={handleChange}
          placeholder="Быстрый поиск..."
          type="text"
          onFocus={handleFocus}
        />
        {isFocused && <img onClick={handleSearchClear} src={CloseIcon} />}
        <div className={styles.search_menu}>
          <SearchMenu focused={isFocused} inputState={search} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
