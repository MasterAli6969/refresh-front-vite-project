import { FC } from "react";
//ИКОНКИ
import FilterIcon from "../../../../assets/icons/FilterIcon.svg";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomButton from "../../../../common/static-components/buttons/custom-button/CustomButton";
import CustomSelect from "../../../../common/static-components/custom-select/CustomSelect";
//СТИЛИ
import styles from "./history_filter_button.module.scss";
import CustomContexMenuOpenWrapper from "../../../../common/smart-component/custom-contex-menu-open-wrapper/CustomContexMenuOpenWrapper";

const HistoryFilterButton: FC = () => {
  return (
    <CustomContexMenuOpenWrapper
      contextMenuItems={[
        () => (
          <div className={styles.drop_item}>
            <h5>Период операций</h5>
            <CustomButton color="dark">
              <h5>Выбрать</h5>
              <img src="" />
            </CustomButton>
          </div>
        ),
        () => (
          <div className={styles.drop_item}>
            <h5>Сотрудник</h5>
            <CustomSelect />
          </div>
        ),
        () => (
          <div className={styles.drop_item}>
            <h5>Тип операции</h5>
            <CustomSelect />
          </div>
        ),
      ]}
    >
      <CustomButton color="dark">
        <img src={FilterIcon} />
      </CustomButton>
    </CustomContexMenuOpenWrapper>
  );
};

export default HistoryFilterButton;
