import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
//ИКОНКИ И ИЗОБРАЖЕНИЯ
import TestAvatarProfice from "../../../../assets/img/TestAvatarProfice.png";
import UserIcon from "../../../../assets/icons/UserIcon.svg";
import ProfileNotiseIcon from "../../../../assets/icons/ProfileNotiseIcon.svg";
import ProfileCalendarIcon from "../../../../assets/icons/ProfileCalendarIcon.svg";
import ProfileLogoutIcon from "../../../../assets/icons/ProfileLogoutIcon.svg";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenUniversalWrapper from "../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
//СТИЛИ
import styles from "./user_panel.module.scss";

const UserPanel: FC = () => {
  return (
    <div className={styles.div}>
      <CustomContexMenuOpenUniversalWrapper
        dropMenuItems={[
          () => (
            <>
              <img src={UserIcon} />
              <p>Мой профиль</p>
            </>
          ),
          () => (
            <>
              <img src={ProfileNotiseIcon} />
              <p>Задачи</p>
            </>
          ),
          () => (
            <>
              <img src={ProfileCalendarIcon} />
              <p>Календарь смен</p>
            </>
          ),
          () => (
            <a href="/auth">
              <img src={ProfileLogoutIcon} />
              <p>Выход</p>
            </a>
          ),
        ]}
        dropPosition="bottom"
      >
        <div className={styles.div}>
          <img src={TestAvatarProfice} />
          <div>
            <p>Василий Петров</p>
            <p>Администратор</p>
          </div>
        </div>
      </CustomContexMenuOpenUniversalWrapper>
    </div>
  );
};

export default UserPanel;
