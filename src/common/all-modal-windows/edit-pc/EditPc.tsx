import { FC } from "react";

import CustomModalHead from "../../common-UI-components/custom-modal-head/CustomModalHead";
import CustomInput from "../../custom-input/CustomInput";
import CustomSelect from "../../common-UI-components/custom-select/CustomSelect";
import CustomButton from "../../common-UI-components/custom-button/CustomButton";

import { selectTestData } from "../../testData";

import styles from "./edit_pc.module.scss";

const EditPc: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Редактировать ПК" />
      </div>
      <div>
        <CustomInput label="Номер компьютера" plaseholder="Ввведите номер ПК" />
      </div>
      <div>
        <CustomSelect
          title="Группа компьютеров"
          selectTitle="Выбрать группу ПК"
          customSelectData={selectTestData}
        />
      </div>
      <div>
        <CustomSelect
          title="Отнести к зоне"
          selectTitle="Выбрать зону ПК"
          customSelectData={selectTestData}
        />
      </div>
      <div>
        <CustomButton color="light" text="Сохранить" />
      </div>
    </div>
  );
};

export default EditPc;
