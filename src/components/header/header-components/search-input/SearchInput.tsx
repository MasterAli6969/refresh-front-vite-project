import { FC, useState, useEffect, useRef } from "react";

import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import AddUserLight from "../../../../assets/icons/AddUserLight.svg";
import SearchMenu from "./search-input-components/search-menu/SearchMenu";
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";

import styles from "./search_input.module.scss";
import AddUserModalWindow from "./search-input-components/add-user-modal-window/AddUserModalWindow";

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
        {!isFocused && (
          <CustomCenterModalOpenWrapper
            redaxStateKey="isAddUserModalWindowOpen"
            openComponents={() => (
              <AddUserModalWindow redaxStateKey="isAddUserModalWindowOpen" />
            )}
          >
            <img className={styles.add_user_icon} src={AddUserLight} />
          </CustomCenterModalOpenWrapper>
        )}
        <div className={styles.search_menu}>
          <SearchMenu focused={isFocused} inputState={search} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
