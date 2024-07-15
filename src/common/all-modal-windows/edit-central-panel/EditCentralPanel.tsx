import { FC } from "react";

import CustomModalHead from "../../common-UI-components/custom-modal-components/custom-modal-head/CustomModalHead";
import CustomInput from "../../custom-input/CustomInput";
import CustomButton from "../../common-UI-components/custom-button/CustomButton";

import styles from "./edit_central_panel.module.scss";

const EditCentralPanel: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Редактирование зоны ПК" />
      </div>
      <div>
        <CustomInput label="Название зоны ПК" plaseholder="Standart" />
      </div>
      <div>
        <CustomButton color="light" text="Сохранить" />
      </div>
    </div>
  );
};

export default EditCentralPanel;
