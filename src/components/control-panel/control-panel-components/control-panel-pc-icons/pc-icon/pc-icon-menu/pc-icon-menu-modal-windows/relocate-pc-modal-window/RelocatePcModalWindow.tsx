import { FC } from "react";
import { RedaxStateProps } from "../../../../../../../../commonTypes.interface";

import CustomDualButtonYesNo from "../../../../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";

import CutomModalWindowUniversal from "../../../../../../../../common/smart-component/cutom-modal-windows/cutom-modal-window-universal/CutomModalWindowUniversal";
import CustomSelect from "../../../../../../../../common/static-components/custom-select/CustomSelect";

interface RelocatePcModalWindowPropsType extends RedaxStateProps {}

const RelocatePcModalWindow: FC<RelocatePcModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  return (
    <CutomModalWindowUniversal
      redaxStateKey={redaxStateKey}
      title="Перемещение компьютера"
      specialText="26"
    >
      <CustomSelect
        selectTitle="Комната для отображения ПК"
        customSelectData={[
          {
            id: 1,
            selectItem: "Standart",
          },
          {
            id: 2,
            selectItem: "Gaming",
          },
          {
            id: 3,
            selectItem: "BootCamp",
          },
        ]}
      />
      <CustomDualButtonYesNo
        redaxStateKey={redaxStateKey}
        buttonRightText="Сохранить"
      />
    </CutomModalWindowUniversal>
  );
};

export default RelocatePcModalWindow;
