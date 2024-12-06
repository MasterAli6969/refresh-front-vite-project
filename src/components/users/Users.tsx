import { FC } from "react";
import UsersHeader from "./users-components/users-header/UsersHeader";
import UsersItem from "./users-components/users-item/UsersItem";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ

const Users: FC = () => {
  return (
    <div>
      <UsersHeader />
      <UsersItem />
    </div>
  );
};

export default Users;
