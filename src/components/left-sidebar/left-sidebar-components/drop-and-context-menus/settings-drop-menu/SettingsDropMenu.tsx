import { FC } from "react";
//ИКОНКИ
import ArrowChekRight from "../../../../../assets/icons/ArrowChekRight.svg";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenUniversalWrapper from "../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
//СТИЛИ
import styles from "./settings_drop_menu.module.scss";
const SettingsDropMenu: FC = () => {
  return (
    <ul className={styles.ul}>
      <li>
        <CustomContexMenuOpenUniversalWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <p>Общие настройки</p>,
            () => <p>Конфигурация отчетов</p>,
            () => <p>Конфигурация бронирования</p>,
            () => <p>Склад</p>,
            () => <p>Конфигурация кассы</p>,
            () => <p>Сотрудники и роли</p>,
            () => <p>Продукты и подписки</p>,
          ]}
        >
          <p>Веб-администратор</p>
          <img src={ArrowChekRight} />
        </CustomContexMenuOpenUniversalWrapper>
      </li>
      <li>
        <CustomContexMenuOpenUniversalWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <p>Конфигурация клиента</p>,
            () => <p>Дизайн</p>,
            () => <p>Консоли</p>,
          ]}
        >
          <p>Клиент</p>
          <img src={ArrowChekRight} />
        </CustomContexMenuOpenUniversalWrapper>
      </li>
      <li>
        <CustomContexMenuOpenUniversalWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <p>Игры и приложения</p>,
            () => <p>Лицензии</p>,
          ]}
        >
          <p>Контент</p>
          <img src={ArrowChekRight} />
        </CustomContexMenuOpenUniversalWrapper>
      </li>
      <li>
        <CustomContexMenuOpenUniversalWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <p>Рейтинг участников</p>,
            () => <p>Достижения</p>,
            () => <p>Ежедневные награды</p>,
            () => <p>Промокоды</p>,
          ]}
        >
          <p>Лояльность</p>
          <img src={ArrowChekRight} />
        </CustomContexMenuOpenUniversalWrapper>
      </li>
    </ul>
  );
};

export default SettingsDropMenu;
