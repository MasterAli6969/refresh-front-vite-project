import { FC } from "react";
import SearchIcon from "../../../../assets/icons/SearchIcon.svg";
import styles from "./search_input.module.scss";

const SearchInput: FC = () => {
  return (
    <div className={styles.div}>
      <img src={SearchIcon} />
      <input placeholder="Поиск пользователя" type="text" />
    </div>
  );
};

export default SearchInput;
