import { FC } from "react";
import { useAppDispatch } from "../../../features/redux/hooks/reduxRootHooks";
import { setToggle } from "../../../features/redux/reducers/common-reducers/toggleRedusers";

import CustomModalHead from "../../common-UI-components/custom-modal-head/CustomModalHead";
import CustomInput from "../../common-UI-components/custom-input/CustomInput";
import CustomTextarea from "../../common-UI-components/custom-textarea/CustomTextarea";
import CustomButton from "../../common-UI-components/custom-button/CustomButton";

import styles from "./new_shift_window.module.scss";

const NewShiftWindow: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setToggle({ key: "isOpenShift", value: true }));
    dispatch(setToggle({ key: "isModalOpen", value: false }));
  };

  return (
    <div className={styles.div}>
      <CustomModalHead text="Открытие новой смены" />
      <div className={styles.subdiv_input}>
        <div>
          <CustomInput
            label="Сумма на начало смены"
            plaseholder="Введите сумму"
          />
        </div>
      </div>
      <div className={styles.subdiv_textarea}>
        <CustomTextarea
          label="Сумма на начало смены"
          plaseholder="Введите комментарий"
        />
      </div>
      <div onClick={handleClick}>
        <CustomButton color="light" text="Отправить" />
      </div>
    </div>
  );
};

export default NewShiftWindow;
