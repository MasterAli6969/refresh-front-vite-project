import { FC, useState } from "react";
//МОДУЛИ ДЛЯ РЕНДЕРА
import SearchMenu from "./search-input-components/search-menu/SearchMenu";
import CustomSearchInput from "../../../../common/static-components/inputs/custom-search-input/CustomSearchInput";
//СТИЛИ
import styles from "./search_input.module.scss";

const SearchInput: FC = () => {
  const [search, setSearch] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div>
      <CustomSearchInput
        isFocused={isFocused}
        setIsFocused={setIsFocused}
        value={search}
        onChange={handleChange}
      />
      <div className={styles.search_menu}>
        <SearchMenu focused={isFocused} inputState={search} />
      </div>
    </div>
  );
};

export default SearchInput;
