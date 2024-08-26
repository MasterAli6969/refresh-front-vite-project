import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";

import CustomSelect from "../../../../../../../../common/static-components/custom-select/CustomSelect";

import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-universal/CutomModalWindowUniversal";

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
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Смена места"
      specialText="ПК 13"
      components={[
        () => (
          <CustomSelect
            title="Куда пересаживаемся?"
            selectTitle="Выберите ПК для смены места"
            customSelectData={selectData}
          />
        ),
        () => (
          <CustomDualButtonYesNo
            redaxStateKey={redaxStateKey}
            buttonRightText="Готово"
          />
        ),
      ]}
    />
  );
};

export default ChangeLocationModalWindow;
