import { FC } from "react";

import CustomCenterModalOpenWrapper from "../../../../common/smart-component/custom-center-modal-open-wrapper/CustomCenterModalOpenWrapper";

import Draggable from "react-draggable";
import PcIcon, { PcIconDataObjektType } from "./pc-icon/PcIcon";
import TestCtrl from "../../../TestCtrl";
import PcChangeModalWindow from "./pc-change-modal-window/PcChangeModalWindow";

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
              <div style={{ width: "50px", height: "50px" }}>
                -
                <PcIcon pcIconDataObjekt={item.pcIconDataObjekt} />
              </div>
            </Draggable>
          );
        })
      )}
      <CustomCenterModalOpenWrapper
        openComponents={() => <PcChangeModalWindow />}
        redaxStateKey="PcChangeModalWindow"
      >
        <h1>TEST OPEN</h1>
      </CustomCenterModalOpenWrapper>
      <TestCtrl />
    </div>
  );
};

export default ControlPanelPcIcons;
