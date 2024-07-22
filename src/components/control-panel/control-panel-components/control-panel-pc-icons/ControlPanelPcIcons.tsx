import { FC } from "react";

import Draggable from "react-draggable";
import PcIcon, { PcIconDataObjektType } from "./pc-icon/PcIcon";

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
                <PcIcon pcIconDataObjekt={item.pcIconDataObjekt} />
              </div>
            </Draggable>
          );
        })
      )}
    </div>
  );
};

export default ControlPanelPcIcons;
