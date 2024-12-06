import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
//ИКОНКИ И ИЗОБРАЖЕНИЯ
import TestAvatarProfice from "../../../../assets/img/TestAvatarProfice.png";
import UserIcon from "../../../../assets/icons/UserIcon.svg";
import ProfileNotiseIcon from "../../../../assets/icons/ProfileNotiseIcon.svg";
import ProfileCalendarIcon from "../../../../assets/icons/ProfileCalendarIcon.svg";
import ProfileLogoutIcon from "../../../../assets/icons/ProfileLogoutIcon.svg";
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./user_panel.module.scss";
import CustomContexMenuOpenClickCloseWrapper from "../../../../common/smart-component/custom-contex-menu-open-click-close-wrapper/CustomContexMenuOpenClickCloseWrapper";

const UserPanel: FC = () => {
  return (
    <div className={styles.div}>
      <CustomContexMenuOpenClickCloseWrapper
        isListItemFlex={true}
        dropMenuItems={[
          () => (
            <>
              <img src={UserIcon} />
              <h4>Мой профиль</h4>
            </>
          ),
          () => (
            <>
              <img src={ProfileNotiseIcon} />
              <h4>Задачи</h4>
            </>
          ),
          () => (
            <>
              <img src={ProfileCalendarIcon} />
              <h4>Календарь смен</h4>
            </>
          ),
          () => (
            <a href="auth">
              <img src={ProfileLogoutIcon} />
              <h4>Выход</h4>
            </a>
          ),
        ]}
        dropPosition="bottom"
      >
        <div className={styles.div}>
          <img src={TestAvatarProfice} />
          <div>
            <h4>Василий Петров</h4>
            <h5>Администратор</h5>
          </div>
        </div>
      </CustomContexMenuOpenClickCloseWrapper>
    </div>
  );
};

export default UserPanel;
