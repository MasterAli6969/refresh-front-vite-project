import { FC, useEffect, useState } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./settings_sidebar.module.scss";
import useToggleString from "../../../../features/custom-hooks/common-hooks/useToggleString";
import classNames from "classnames";

const SettingsSidebar: FC = () => {
  const { activeElement, handleChange } = useToggleString("Общие настройки");

  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const handleLiClick = (itemId: number) => {
    setActiveItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  const handleMouseEnter = (itemId: number) => {
    setIsHovered(itemId);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  useEffect(() => {
    setActiveItemId(1);
  }, []);

  const handleClick = (buttomName: string) => {
    handleChange(buttomName);
  };

  return (
    <>
      <div className={styles.div}>
        <div className={styles.subdiv}>
          <div className={styles.subdiv_title}>
            <h5>Контрольная панель</h5>
          </div>
          <ul className={styles.subdiv_list}>
            <li
              onClick={() => handleLiClick(1)}
              className={classNames({ [styles.active]: activeItemId === 1 })}
            >
              <h3>Общие настройки</h3>
            </li>
            <li
              onClick={() => handleLiClick(2)}
              className={classNames({ [styles.active]: activeItemId === 2 })}
            >
              <h3>Группы пользователей</h3>
            </li>
            <li
              onClick={() => handleLiClick(3)}
              className={classNames({ [styles.active]: activeItemId === 3 })}
            >
              <h3>Группы ПК и консолей</h3>
            </li>
            <li
              onClick={() => handleLiClick(4)}
              className={classNames({ [styles.active]: activeItemId === 4 })}
            >
              <h3>Конфигурация отчетов</h3>
            </li>
            <li
              onClick={() => handleLiClick(5)}
              className={classNames({ [styles.active]: activeItemId === 5 })}
            >
              <h3>Конфигурация бронирования</h3>
            </li>
            <li
              onClick={() => handleLiClick(6)}
              className={classNames({ [styles.active]: activeItemId === 6 })}
            >
              <h3>Склад</h3>
            </li>
            <li
              onClick={() => handleLiClick(7)}
              className={classNames({ [styles.active]: activeItemId === 7 })}
            >
              <h3>Конфигурация кассы</h3>
            </li>
            <li
              onClick={() => handleLiClick(8)}
              className={classNames({ [styles.active]: activeItemId === 8 })}
            >
              <h3>Сотрудники и роли</h3>
            </li>
            <li
              onClick={() => handleLiClick(9)}
              className={classNames({ [styles.active]: activeItemId === 9 })}
            >
              <h3>Продукты и подписки</h3>
            </li>
          </ul>
        </div>
        <div className={styles.subdiv}>
          <div className={styles.subdiv_title}>
            <h5>Контент</h5>
          </div>
          <ul className={styles.subdiv_list}>
            <li
              onClick={() => handleLiClick(10)}
              className={classNames({ [styles.active]: activeItemId === 10 })}
            >
              <h3>Игры и приложения</h3>
            </li>
            <li
              onClick={() => handleLiClick(11)}
              className={classNames({ [styles.active]: activeItemId === 11 })}
            >
              <h3>Лицензии</h3>
            </li>
          </ul>
        </div>
        <div className={styles.subdiv}>
          <div className={styles.subdiv_title}>
            <h5>Лояльность</h5>
          </div>
          <ul className={styles.subdiv_list}>
            <li
              onClick={() => handleLiClick(10)}
              className={classNames({ [styles.active]: activeItemId === 10 })}
            >
              <h3>Игры и приложения</h3>
            </li>
            <li
              onClick={() => handleLiClick(11)}
              className={classNames({ [styles.active]: activeItemId === 11 })}
            >
              <h3>Лицензии</h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SettingsSidebar;
