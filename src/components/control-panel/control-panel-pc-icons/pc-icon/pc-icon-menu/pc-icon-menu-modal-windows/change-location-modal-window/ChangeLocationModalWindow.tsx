import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../commonTypes.interface";

import CustomModalCloseHead from "../../../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomSelect from "../../../../../../../common/static-components/custom-select/CustomSelect";

import styles from "./change_location_modal_window.module.scss";
import CustomDualButtonYesNo from "../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

const selectData = [
  {
    id: 1,
    selectItem: "Select1",
  },
  {
    id: 2,
    selectItem: "Select1",
  },
  {
    id: 3,
    selectItem: "Select1",
  },
];

export interface ChangeLocationModalWindowPropsType extends RedaxStateProps {}

const ChangeLocationModalWindow: FC<ChangeLocationModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
          text="Смена места"
          specialText="ПК 13"
        />
      </div>
      <div>
        <CustomSelect
          title="Куда пересаживаемся?"
          selectTitle="Выберите ПК для смены места"
          customSelectData={selectData}
        />
      </div>
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Готово"
      />
    </div>
  );
};

export default ChangeLocationModalWindow;
