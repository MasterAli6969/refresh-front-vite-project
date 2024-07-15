import { FC } from "react";

import CustomModalHead from "../../custom-modal-head/CustomModalHead";

import styles from "./cutom_modal_window_type1.module.scss";

const CutomModalWindowType1: FC = () => {
  return (
    <div className={styles.div}>
      <CustomModalHead text="Переименование комнаты" specialText="Standart" />
    </div>
  );
};

export default CutomModalWindowType1;
