import { FC } from "react";

import CustomModalHead from "../../custom-modal-head/CustomModalHead";
import CustomInput from "../../custom-input/CustomInput";
import CustomSelect from "../../custom-select/CustomSelect";
import CustomButton from "../../custom-button/CustomButton";

import { selectTestData } from "../../testData";

import styles from "./change_location.module.scss";

const ChangeLocation: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Смена места" />
      </div>
      <div>
        <CustomInput
          label="Место пользователя"
          plaseholder="Ввведите номер ПК"
        />
      </div>
      <div>
        <CustomSelect
          title="Куда пересаживаемся?"
          selectTitle="Выберите новый ПК"
          customSelectData={selectTestData}
        />
      </div>
      <div>
        <CustomButton color="light" text="Сохранить" />
      </div>
    </div>
  );
};

export default ChangeLocation;
