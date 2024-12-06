import { FC, useState } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenClickCloseWrapper from "../../../../../common/smart-component/context-menus/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenClickCloseWrapper";
//СТИЛИ
import styles from "./settings_drop_menu.module.scss";
import ArrowChekRight from "../../../../../assets/icons-svg-components/ArrowChekRight";
import classNames from "classnames";
const SettingsDropMenu: FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActive(id);
  };
  return (
    <ul className={styles.ul}>
      <li onClick={() => handleClick(1)}>
        <CustomContexMenuOpenClickCloseWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <h3>Общие настройки</h3>,
            () => <h3>Конфигурация отчетов</h3>,
            () => <h3>Конфигурация бронирования</h3>,
            () => <h3>Склад</h3>,
            () => <h3>Конфигурация кассы</h3>,
            () => <h3>Сотрудники и роли</h3>,
            () => <h3>Продукты и подписки</h3>,
          ]}
        >
          <h3>Веб-администратор</h3>
          <div
            className={classNames(styles.arrow, {
              [styles._active_arrow]: active === 1,
            })}
          >
            <ArrowChekRight color="#fff" />
          </div>
        </CustomContexMenuOpenClickCloseWrapper>
      </li>
      <li onClick={() => handleClick(2)}>
        <CustomContexMenuOpenClickCloseWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <h3>Конфигурация клиента</h3>,
            () => <h3>Дизайн</h3>,
            () => <h3>Консоли</h3>,
          ]}
        >
          <h3>Клиент</h3>
          <div
            className={classNames(styles.arrow, {
              [styles._active_arrow]: active === 2,
            })}
          >
            <ArrowChekRight color="#fff" />
          </div>
        </CustomContexMenuOpenClickCloseWrapper>
      </li>
      <li onClick={() => handleClick(3)}>
        <CustomContexMenuOpenClickCloseWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <h3>Игры и приложения</h3>,
            () => <h3>Лицензии</h3>,
          ]}
        >
          <h3>Контент</h3>
          <div
            className={classNames(styles.arrow, {
              [styles._active_arrow]: active === 3,
            })}
          >
            <ArrowChekRight color="#fff" />
          </div>
        </CustomContexMenuOpenClickCloseWrapper>
      </li>
      <li onClick={() => handleClick(4)}>
        <CustomContexMenuOpenClickCloseWrapper
          dropPosition="right"
          dropMenuItems={[
            () => <h3>Рейтинг участников</h3>,
            () => <h3>Достижения</h3>,
            () => <h3>Ежедневные награды</h3>,
            () => <h3>Промокоды</h3>,
          ]}
        >
          <h3>Лояльность</h3>
          <div
            className={classNames(styles.arrow, {
              [styles._active_arrow]: active === 4,
            })}
          >
            <ArrowChekRight color="#fff" />
          </div>
        </CustomContexMenuOpenClickCloseWrapper>
      </li>
    </ul>
  );
};

export default SettingsDropMenu;
