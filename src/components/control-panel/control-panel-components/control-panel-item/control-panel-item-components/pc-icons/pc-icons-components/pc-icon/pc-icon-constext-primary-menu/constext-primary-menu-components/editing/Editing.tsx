import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./editing.module.scss";
import ManagementIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/ManagementIcon";
import ArrowChekRight from "../../../../../../../../../../../assets/icons-svg-components/ArrowChekRight";
import CustomContexMenuOpenClickCloseWrapper from "../../../../../../../../../../../common/smart-component/custom-contex-menu-open-click-close-wrapper/CustomContexMenuOpenClickCloseWrapper";

interface EditingPropsType {
  comp_id: number;
}

const Editing: FC<EditingPropsType> = () => {
  return (
    <CustomContexMenuOpenClickCloseWrapper
      dropPosition="right"
      dropMenuItems={[() => <h3>Переместить</h3>, () => <h3>Удалить</h3>]}
    >
      <div className={styles.div}>
        <ManagementIcon color="#fff" />
        <h5>Редактирование</h5>
        <ArrowChekRight color="#fff" />
      </div>
    </CustomContexMenuOpenClickCloseWrapper>
  );
};

export default Editing;
