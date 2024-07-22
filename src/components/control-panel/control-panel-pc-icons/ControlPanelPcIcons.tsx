import { FC } from "react";

import Draggable from "react-draggable";
import PcIcon, { PcIconDataType } from "./pc-icon/PcIcon";

import { pcIconData } from "./data";

const ControlPanelPcIcons: FC = () => {
  return (
    <div style={{ zIndex: "1", height: "100vh" }}>
      {!pcIconData || pcIconData.length === 0 ? (
        <h1>Ooops, server error, please wait...</h1>
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
