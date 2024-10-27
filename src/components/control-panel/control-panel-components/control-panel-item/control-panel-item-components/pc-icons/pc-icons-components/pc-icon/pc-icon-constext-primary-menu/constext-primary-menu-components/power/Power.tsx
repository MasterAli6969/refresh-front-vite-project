import { FC } from "react";
//ИКОНКИ
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenUniversalWrapper from "../../../../../../../../../../../common/smart-component/custom-contex-menu-open-universal-wrapper/CustomContexMenuOpenUniversalWrapper";
import OffIcon from "../../../../../../../../../../../assets/icons-svg-components/pcIcon-context-menu/OffIcon";
import ArrowChekRight from "../../../../../../../../../../../assets/icons-svg-components/ArrowChekRight";
//СТИЛИ
import styles from "./power.module.scss";

interface PowerPropsType {
  comp_id: number;
}

const Power: FC<PowerPropsType> = () => {
  return (
    <CustomContexMenuOpenUniversalWrapper
      dropPosition="right"
      dropMenuItems={[() => <h3>Выключить</h3>, () => <h3>Перезагрузить</h3>]}
    >
      <div className={styles.div}>
        <OffIcon color="#fff" />
        <h5>Питание</h5>
        <ArrowChekRight color="#fff" />
      </div>
    </CustomContexMenuOpenUniversalWrapper>
  );
};

export default Power;
