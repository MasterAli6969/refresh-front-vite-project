import { FC } from "react";

import CustomLogo from "../../../common/common-UI-components/custom-logo/CustomLogo";
import CustomMailInput from "../../../common/common-UI-components/custom-mail-input/CustomMailInput";
import CustomButton from "../../../common/common-UI-components/custom-button/CustomButton";
import SphereArrowCheckLeft from "../../../assets/icons/SphereArrowCheckLeft.svg";

import styles from "./restoring_access_form.module.scss";

const RestoringAccessForm: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <CustomLogo display="flex" />
      </div>
      <div>
        <img src={SphereArrowCheckLeft} />
        <h3>Восстановление доступа</h3>
      </div>
      <div>
        <CustomMailInput
          error={false}
          label="gog"
          name="mail"
          value="mail"
          onChange={() => {}}
        />
      </div>
      <div>
        <CustomButton
          color="light"
          text="Отправить ссылку для восстановления"
        />
      </div>
    </div>
  );
};

export default RestoringAccessForm;
