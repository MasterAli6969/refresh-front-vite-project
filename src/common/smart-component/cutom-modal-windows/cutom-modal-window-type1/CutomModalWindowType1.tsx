import { FC } from "react";

import CustomModalHead from "../../custom-modal-close-head/CustomModalCloseHead";

import styles from "./cutom_modal_window_type1.module.scss";

const CutomModalWindowType1: FC = () => {
  return (
    <div className={styles.div}>
      <CustomModalHead text="Переименование комнаты" specialText="Standart" />
      <h1>GOG</h1>
    </div>
  );
};

export default CutomModalWindowType1;
