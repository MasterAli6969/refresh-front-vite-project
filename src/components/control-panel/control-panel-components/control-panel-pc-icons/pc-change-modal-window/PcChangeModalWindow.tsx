import { FC } from "react";
import { RedaxStateProps } from "../../../../../commonTypes.interface";
import { useAppSelector } from "../../../../../features/redux/hooks/reduxRootHooks";
import CustomModalCloseHead from "../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomSelect, {
  CustomSelectDataType,
} from "../../../../../common/static-components/custom-select/CustomSelect";
import CustomDualButtonYesNo from "../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import styles from "./pc_change_modal_window.module.scss";
import { RoomTabObjectTypes } from "../../../../../features/redux/reducers/special-reducers/control-panel-reducers/roomTabsEditReducer";

const selectData: CustomSelectDataType[] = [
  { id: 1, selectItem: "selectItem1" },
  { id: 2, selectItem: "selectItem2" },
  { id: 3, selectItem: "selectItem3" },
];

interface PcChangeModalWindowPropsType extends RedaxStateProps {}

const PcChangeModalWindow: FC<PcChangeModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  const roomTabsName = useAppSelector((state) => state.roomTabsEdit.roomTabs);

  const mapRoomTabsNameSelectData = (
    data: RoomTabObjectTypes
  ): CustomSelectDataType => ({
    id: data.id,
    selectItem: data.name,
  });

  return (
    <div className={styles.div}>
      <CustomModalCloseHead
        redaxStateKey={redaxStateKey}
        text="Перенос выбранных ПК в другую комнату"
      />
      <CustomSelect
        selectTitle="Выберите комнату"
        customSelectData={roomTabsName}
        mapDataToSelect={mapRoomTabsNameSelectData}
      />
      <CustomDualButtonYesNo
        buttonRightText="Перенести"
        redaxStateKey={redaxStateKey}
      />
    </div>
  );
};

export default PcChangeModalWindow;
