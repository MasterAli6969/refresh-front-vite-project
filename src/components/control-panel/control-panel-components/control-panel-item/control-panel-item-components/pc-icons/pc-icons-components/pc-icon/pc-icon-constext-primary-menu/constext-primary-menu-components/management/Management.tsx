import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
//СТИЛИ
import styles from "./management.module.scss";
import CustomContexMenuOpenUniversalWrapper from "../../../../../../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import EditIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/EditIcon";
import ArrowChekRight from "../../../../../../../../../../../assets/icons-svg-components/ArrowChekRight";

interface ManagementPropsType {
  comp_id: number;
}

const Management: FC<ManagementPropsType> = () => {
  return (
    <CustomContexMenuOpenUniversalWrapper
      dropPosition="right"
      dropMenuItems={[
        () => <h3>Удаленный контроль</h3>,
        () => <h3>Проводник Win</h3>,
        () => <h3>Запуск диспетчера</h3>,
      ]}
    >
      <div className={styles.div}>
        <EditIcon color="#fff" />
        <h5>Управление</h5>
        <ArrowChekRight color="#fff" />
      </div>
    </CustomContexMenuOpenUniversalWrapper>
  );
};

export default Management;
