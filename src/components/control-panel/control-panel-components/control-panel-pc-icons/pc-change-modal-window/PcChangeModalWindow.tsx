import { FC, useState } from "react";
import { RedaxStateProps } from "../../../../../commonTypes.interface";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../features/redux/hooks/reduxRootHooks";
import CustomModalCloseHead from "../../../../../common/smart-component/custom-modal-close-head/CustomModalCloseHead";
import CustomSelect, {
  CustomSelectDataType,
} from "../../../../../common/static-components/custom-select/CustomSelect";
import CustomDualButtonYesNo from "../../../../../common/static-components/custom-dual-button-yes-no/CustomDualButtonYesNo";
import { RoomTabObjectTypes } from "../../../../../features/redux/reducers/special-reducers/control-panel-reducers/roomTabsEditReducer";
import { setSaveDynamicNumber } from "../../../../../features/redux/reducers/common-reducers/saveNumberDynamicReduser";

import styles from "./pc_change_modal_window.module.scss";
import {
  resetModals,
  setToggleDynamic,
} from "../../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import {
  resetOnClickDynamic,
  setOnClickDynamic,
} from "../../../../../features/redux/reducers/common-reducers/onClickDynamicReduser";

interface PcChangeModalWindowPropsType extends RedaxStateProps {}

const PcChangeModalWindow: FC<PcChangeModalWindowPropsType> = ({
  redaxStateKey,
}) => {
  const [selectedId, setSelectedId] = useState<number | string>("");
  const roomTabsName = useAppSelector((state) => state.roomTabsEdit.roomTabs);

  const dispatch = useAppDispatch();

  const mapRoomTabsNameSelectData = (
    data: RoomTabObjectTypes
  ): CustomSelectDataType => ({
    id: data.id,
    selectItem: data.name,
  });

  const handleRoomChange = (key: number | string) => {
    setSelectedId(key);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      setSaveDynamicNumber({ key: "roomChangeSelectId", value: selectedId })
    );
    dispatch(
      setOnClickDynamic({
        key: redaxStateKey,
        value: true,
      }),
      resetOnClickDynamic()
    );

    dispatch(
      setToggleDynamic({
        id: redaxStateKey,
        value: false,
      }),
      resetModals()
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <CustomModalCloseHead
        redaxStateKey={redaxStateKey}
        text="Перенос выбранных ПК в другую комнату"
      />
      <CustomSelect
        selectTitle="Выберите комнату"
        customSelectData={roomTabsName}
        mapDataToSelect={mapRoomTabsNameSelectData}
        handleSelectId={handleRoomChange}
      />
      <CustomDualButtonYesNo
        isSubmit={true}
        buttonRightText="Перенести"
        redaxStateKey={redaxStateKey}
      />
    </form>
  );
};

export default PcChangeModalWindow;
