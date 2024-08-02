import { FC, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../../../../features/redux/hooks/reduxRootHooks";

import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";
import Draggable from "react-draggable";
import PcIcon, { PcIconDataObjektType } from "./pc-icon/PcIcon";
import PcChangeModalWindow from "./pc-change-modal-window/PcChangeModalWindow";
import { setToggleDynamic } from "../../../../features/redux/reducers/common-reducers/toggleDynamicReduser";

interface PcIconDataType {
  id: number;
  pcIconDataObjekt: PcIconDataObjektType;
}

interface ControlPanelPcIconsPropsType {
  pcIconData?: PcIconDataType[];
}

const ControlPanelPcIcons: FC<ControlPanelPcIconsPropsType> = ({
  pcIconData,
}) => {
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [selectedPeople, setSelectedPeople] = useState<PcIconDataType[]>([]);
  const [isCtrlPressed, setIsCtrlPressed] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Control") {
      setIsCtrlPressed(false);
      if (selectedIndices.length > 0) {
        const selected = selectedIndices
          .map((i) => pcIconData && pcIconData[i])
          .filter((item): item is PcIconDataType => item !== undefined);
        setSelectedPeople(selected);
        dispatch(setToggleDynamic({ id: "PcChangeModalWindow", value: true }));
        setSelectedIndices([]);
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Control") {
      setIsCtrlPressed(true);
    }
  };

  const handleIsKey = useCallback(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [selectedIndices]);

  useEffect(() => {
    handleIsKey();
  }, [handleIsKey]);

  const handleSquareClick = (index: number) => {
    if (isCtrlPressed) {
      setSelectedIndices((prevSelected) => {
        if (prevSelected.includes(index)) {
          return prevSelected.filter((item) => item !== index);
        } else {
          return [...prevSelected, index];
        }
      });
    }
  };

  return (
    <div style={{ zIndex: "1", height: "100vh" }}>
      {!pcIconData || pcIconData.length === 0 ? (
        <Draggable bounds="parent" grid={[50, 50]}>
          <div
            style={{ width: "50px", height: "50px", backgroundColor: "red" }}
          ></div>
        </Draggable>
      ) : (
        pcIconData.map((item: PcIconDataType) => {
          return (
            <Draggable key={item.id} bounds="parent" grid={[50, 50]}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  filter: selectedIndices.includes(item.id)
                    ? "drop-shadow(0 0 10px blue)"
                    : "none",
                }}
                onClick={() => handleSquareClick(item.id)}
              >
                <PcIcon pcIconDataObjekt={item.pcIconDataObjekt} />
              </div>
            </Draggable>
          );
        })
      )}
      <CustomCenterModalOpenWrapper
        openComponents={() => (
          <PcChangeModalWindow redaxStateKey="PcChangeModalWindow" />
        )}
        redaxStateKey="PcChangeModalWindow"
      ></CustomCenterModalOpenWrapper>
    </div>
  );
};

export default ControlPanelPcIcons;
