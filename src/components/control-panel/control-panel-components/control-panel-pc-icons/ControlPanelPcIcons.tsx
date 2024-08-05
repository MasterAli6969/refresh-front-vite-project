/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../features/redux/hooks/reduxRootHooks";
import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import Draggable from "react-draggable";
import PcIcon, { PcIconDataObjektType } from "./pc-icon/PcIcon";
import PcChangeModalWindow from "./pc-change-modal-window/PcChangeModalWindow";
import { setToggleDynamic } from "../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";
import { addNewPcIcons } from "../../../../features/redux/reducers/special-reducers/control-panel-reducers/pcIconEditReducer";

export interface PcIconDataType {
  id: number | string;
  pcIconDataObjekt: PcIconDataObjektType;
}

interface ControlPanelPcIconsPropsType {
  pcIconData: PcIconDataType[];
}

const ControlPanelPcIcons: FC<ControlPanelPcIconsPropsType> = ({
  pcIconData,
}) => {
  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);
  const [selectedIcons, setSelectedIcons] = useState<PcIconDataType[]>([]);

  const modalChangeSelectKey = useAppSelector(
    (state) => state.saveDynamicNumber.dynamicNumberStates["roomChangeSelectId"]
  );

  const isChangePcIcon = useAppSelector(
    (state) => state.onClickDynamic.onClickStates["PcChangeModalWindow"]
  );

  const dispatch = useAppDispatch();

  const handleClickOn = useCallback((event: KeyboardEvent) => {
    if (event.key === "Control") {
      setIsCtrlPressed(true);
    }
  }, []);

  const handleSquareClick = useCallback(
    (pcIcon: PcIconDataType) => {
      if (isCtrlPressed) {
        setSelectedIcons((prevSelectedIcons) => {
          const isAlreadySelected = prevSelectedIcons.some(
            (selectedItem) => selectedItem.id === pcIcon.id
          );
          return isAlreadySelected
            ? prevSelectedIcons.filter(
                (selectedItem) => selectedItem.id !== pcIcon.id
              )
            : [...prevSelectedIcons, pcIcon];
        });
      }
    },
    [isCtrlPressed]
  );

  const handleClickOff = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Control") {
        setIsCtrlPressed(false);
        if (selectedIcons.length !== 0) {
          dispatch(
            setToggleDynamic({ id: "PcChangeModalWindow", value: true })
          );
          if (isChangePcIcon) {
            dispatch(
              addNewPcIcons({
                key: `pcIconsData${modalChangeSelectKey}`,
                icons: selectedIcons,
              })
            );
          }
          setSelectedIcons([]); // Обнуление состояния
        }
      }
    },
    [selectedIcons, dispatch, modalChangeSelectKey, isChangePcIcon]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => handleClickOn(event);
    const handleKeyUp = (event: KeyboardEvent) => handleClickOff(event);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleClickOn, handleClickOff]);

  return (
    <div style={{ zIndex: "1", height: "100vh" }}>
      {pcIconData.map((item: PcIconDataType) => {
        return (
          <Draggable key={item.id} bounds="parent" grid={[50, 50]}>
            <div
              style={{
                width: "50px",
                height: "50px",
                filter: selectedIcons.some(
                  (selectedItem) => selectedItem.id === item.id
                )
                  ? "drop-shadow(0 0 10px blue)"
                  : "none",
              }}
              onClick={() => handleSquareClick(item)}
            >
              <PcIcon pcIconDataObjekt={item.pcIconDataObjekt} />
            </div>
          </Draggable>
        );
      })}
      <CustomCenterModalOpenWrapper
        openComponents={() => (
          <PcChangeModalWindow redaxStateKey="PcChangeModalWindow" />
        )}
        redaxStateKey="PcChangeModalWindow"
      />
    </div>
  );
};

export default ControlPanelPcIcons;
