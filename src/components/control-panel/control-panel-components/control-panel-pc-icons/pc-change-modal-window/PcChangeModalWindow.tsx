import { FC } from "react";

import CustomModalCloseHead from "../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomSelect, {
  CustomSelectDataType,
} from "../../../../../common/static-components/custom-select/CustomSelect";
import CustomDualButtonYesNo from "../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import styles from "./pc_change_modal_window.module.scss";

const selectData: CustomSelectDataType[] = [
  {
    id: 1,
    selectItem: "selectItem1",
  },
  {
    id: 2,
    selectItem: "selectItem2",
  },
  {
    id: 3,
    selectItem: "selectItem3",
  },
];

const PcChangeModalWindow: FC = () => {
  return (
    <div className={styles.div}>
      <CustomModalCloseHead
        redaxStateKey="PcChangeModalWindow"
        text="Перенос выбранных ПК в другую комнату"
      />
      <CustomSelect
        selectTitle="Выберете комнату"
        customSelectData={selectData}
      />
      <CustomDualButtonYesNo
        buttonRightText="Перенести"
        redaxStateKey="PcChangeModalWindow"
      />
    </div>
  );
};

export default PcChangeModalWindow;
