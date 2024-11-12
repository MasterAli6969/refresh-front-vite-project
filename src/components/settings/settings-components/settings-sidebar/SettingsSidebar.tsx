import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./settings_sidebar.module.scss";

const SettingsSidebar: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <h5>Контрольная панель </h5>
        <div className={styles.subdiv_item}>
          <div>
            <h4>Общие настройки</h4>
          </div>
          <div>
            <h4>Группы пользователей</h4>
          </div>
          <div>
            <h4>Группы ПК и консолей</h4>
          </div>
          <div>
            <h4>Конфигурация отчетов</h4>
          </div>
          <div>
            <h4>Конфигурация бронирования</h4>
          </div>
          <div>
            <h4>Склад</h4>
          </div>
          <div>
            <h4>Конфигурация кассы</h4>
          </div>
          <div>
            <h4>Сотрудники и роли</h4>
          </div>
          <div>
            <h4>Продукты и подписки</h4>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.subdiv}>
        <h5>Клиентская часть </h5>
        <div className={styles.subdiv_item}>
          <div>
            <h4>Клиентская часть</h4>
          </div>
          <div>
            <h4>Общие настройки</h4>
          </div>
          <div>
            <h4>Дизайн</h4>
          </div>
          <div>
            <h4>Консоли</h4>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.subdiv}>
        <h5>Клиентская часть </h5>
        <div className={styles.subdiv_item}>
          <div>
            <h4>Контент</h4>
          </div>
          <div>
            <h4>Игры и приложения</h4>
          </div>
          <div>
            <h4>Лицензии</h4>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className={styles.subdiv}>
        <h5>Клиентская часть </h5>
        <div className={styles.subdiv_item}>
          <div>
            <h4>Лояльность</h4>
          </div>
          <div>
            <h4>Рейтинг участников</h4>
          </div>
          <div>
            <h4>Ежедневные награды</h4>
          </div>
          <div>
            <h4>Промокоды</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
