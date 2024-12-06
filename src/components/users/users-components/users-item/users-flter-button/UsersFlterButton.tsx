import { FC } from "react";
//ИКОНКИ
import FilterIcon from "../../../../../assets/icons/FilterIcon.svg";
//МОДУЛИ ДЛЯ РЕНДЕРА
import CustomContexMenuOpenWrapper from "../../../../../common/smart-component/custom-contex-menu-open-wrapper/CustomContexMenuOpenWrapper";
import CustomButton from "../../../../../common/static-components/buttons/custom-button/CustomButton";
import CustomSelect from "../../../../../common/static-components/custom-select/CustomSelect";
//МОДУЛИ ДЛЯ РАБОТЫ

const UsersFlterButton: FC = () => {
  return (
    <CustomContexMenuOpenWrapper
      contextMenuItems={[
        () => (
          <div>
            <h5>Период операций</h5>
            <CustomButton color="dark">
              <h5>Выбрать</h5>
              <img src="" />
            </CustomButton>
          </div>
        ),
        () => (
          <div>
            <h5>Сотрудник</h5>
            <CustomSelect />
          </div>
        ),
        () => (
          <div>
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

export default UsersFlterButton;
