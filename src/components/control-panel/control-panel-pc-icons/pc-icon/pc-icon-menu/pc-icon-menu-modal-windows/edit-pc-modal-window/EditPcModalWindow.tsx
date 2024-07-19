import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../commonTypes.interface";

import CustomModalCloseHead from "../../../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomCounterInput from "../../../../../../../common/static-components/custom-counter-input/CustomCounterInput";
import CustomSelect from "../../../../../../../common/static-components/custom-select/CustomSelect";
import CustomDualButtonYesNo from "../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import styles from "./edit_pc_modal_window.module.scss";

interface EditPcModalWindowPropsType extends RedaxStateProps {}

const dataSelect = [
  {
    id: 1,
    selectItem: "Select1",
  },
  {
    id: 2,
    selectItem: "Select2",
  },
  {
    id: 3,
    selectItem: "Select3",
  },
  {
    id: 4,
    selectItem: "Select4",
  },
];

const EditPcModalWindow: FC<EditPcModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <div className={styles.div}>
      <div>
        <CustomModalCloseHead
          redaxStateKey={redaxStateKey}
          text="Редактирование"
          specialText="ПК-13"
        />
      </div>
      <div>
        <CustomCounterInput label="Номер компьютера" />
      </div>
      <div>
        <CustomSelect
          customSelectData={dataSelect}
          title="Группа ПК"
          selectTitle="Выберите группу для данного ПК"
        />
      </div>
      <div>
        <CustomSelect
          customSelectData={dataSelect}
          title="Отнести ПК к комнате"
          selectTitle="Выберите комнату для данного ПК"
        />
      </div>
      <div>
        <CustomDualButtonYesNo
          redaxStateKey={redaxStateKey}
          buttonRightText="Готово"
        />
      </div>
    </div>
  );
};

export default EditPcModalWindow;
