import { FC } from "react";

import Draggable from "react-draggable";
import PcIcon from "./pc-icon/PcIcon";

import { PcIconDataType } from "./pc-icon/pcIcon.interface";

import { pcIconData } from "./data";

const CentralPanelPcIcons: FC = () => {
  return (
    <div>
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

export default CentralPanelPcIcons;