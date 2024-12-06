import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomSearchInput from "../../../../common/static-components/inputs/custom-search-input/CustomSearchInput";
import UsersFlterButton from "./users-flter-button/UsersFlterButton";
import CustomButton from "../../../../common/static-components/buttons/custom-button/CustomButton";
//СТИЛИ
import styles from "./users_item.module.scss";

const UsersItem: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <CustomSearchInput
          customWidth="97%"
          placeholder="Поиск пользователей по логину / номеру телефона / адресу эл.почты"
        />
        <UsersFlterButton />
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Логин пользователя</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Номер телефона</th>
            <th>Группа пользователей</th>
            <th>Основной баланс</th>
            <th>Бонусный баланс</th>
            <th>Активные тарифы</th>
            <th>Остаток времени</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr>
            <td>GG. August</td>
            <td>Алексей</td>
            <td>Подмасков</td>
            <td>+7 996 555 43 23</td>
            <td>Стандартная группа</td>
            <td>₽ 2 189</td>
            <td>30</td>
            <td>2</td>
            <td>65ч 24мин</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersItem;
