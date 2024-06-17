import { FC, useState, useEffect, useRef } from "react";

import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import SearchMenu from "./search-menu/SearchMenu";

import styles from "./search_input.module.scss";

const SearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    console.log(value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef}>
      <div className={styles.div}>
        <img src={SearchIcon} />
        <input
          value={search}
          onChange={handleChange}
          placeholder="Поиск пользователя"
          type="search"
          onFocus={handleFocus}
        />
      </div>
      <div>
        <SearchMenu focused={isFocused} inputState={search} />
      </div>
    </div>
  );
};

export default SearchInput;
