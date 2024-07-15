import { FC } from "react";
import { useAppDispatch } from "../../../features/redux/hooks/reduxRootHooks";
import { setToggle } from "../../../features/redux/reducers/common-reducers/toggleRedusers";

import CustomModalHead from "../../common-UI-components/custom-modal-components/custom-modal-head/CustomModalHead";
import CustomAvatarName from "../../common-UI-components/custom-avatar-name/CustomAvatarName";
import CustomDualTextDisplay from "../../common-UI-components/custom-dual-text-display/CustomDualTextDisplay";
import CustomTextarea from "../../common-UI-components/custom-textarea/CustomTextarea";
import CustomButton from "../../common-UI-components/custom-button/CustomButton";

import styles from "./close_shift_window.module.scss";

const CloseShiftWindow: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setToggle({ key: "isOpenShift", value: false }));
    dispatch(setToggle({ key: "isModalOpen", value: false }));
  };
  return (
    <div className={styles.div}>
      <div>
        <CustomModalHead text="Закрытие смены" />
      </div>
      <div className={styles.subdiv_employee}>
        <h3>Сотрудник смены</h3>
        <div>
          <CustomAvatarName name="AL" />
          <h3>Алексей Лариков</h3>
        </div>
      </div>
      <div>
        <CustomDualTextDisplay text1="Начало смены" text2="05.05.2005 13:00" />
      </div>
      <div>
        <CustomTextarea label="Комментарий" plaseholder="Введите комментарий" />
      </div>
      <div onClick={handleClick}>
        <CustomButton color="light" text="Закрытие смены и печать отчета" />
      </div>
    </div>
  );
};

export default CloseShiftWindow;
