import { FC } from "react";

import CustomModalHead from "../../common-UI-components/custom-modal-head/CustomModalHead";
import CustomInput from "../../custom-input/CustomInput";
import CustomButton from "../../common-UI-components/custom-button/CustomButton";

import styles from "./add_zone_window.module.scss";

const AddZoneWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Добавить зону" />
      </div>
      <div>
        <CustomInput
          label="Название зоны"
          plaseholder="Введите название зоны"
        />
      </div>
      <div>
        <CustomButton color="light" text="Добавить" />
      </div>
    </div>
  );
};

export default AddZoneWindow;
