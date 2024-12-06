import { FC } from "react";
//ИКОНКИ
import ExportIcon from "../../../../assets/icons/ExportIcon.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomToggleButton from "../../../../common/static-components/buttons/custom-toggle-button/CustomToggleButton";
import CustomButton from "../../../../common/static-components/buttons/custom-button/CustomButton";
//СТИЛИ
import styles from "./users_header.module.scss";

const UsersHeader: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomToggleButton
          buttonsText={[
            "Все пользователи (1924)",
            "Group 1",
            "Group 2",
            "Group 3",
            "Group 4",
          ]}
        />
      </div>
      <div>
        <CustomButton>
          <img src={ExportIcon} />
        </CustomButton>
        <CustomButton color="light">Пригласить пользователя</CustomButton>
      </div>
    </div>
  );
};

export default UsersHeader;
