import { FC } from "react";

import Draggable from "react-draggable";
import PcIcon from "./pc-icons-components/pc-icon/PcIcon";
//СТИЛИ
import styles from "./control_panel_pc_icons.module.scss";

export interface PcIconType {
  pos_x: number;
  pos_y: number;
  zone: number;
  comp_id: number;
}

interface PcIconsPropsType {
  pcIconData: PcIconType[];
}

const PcIcons: FC<PcIconsPropsType> = ({ pcIconData }) => {
  return (
    <div className={styles.div}>
      {!pcIconData || pcIconData.length === 0 ? (
        <h1>Ожидание...</h1>
      ) : (
        pcIconData.map((item: PcIconType) => {
          return (
            <Draggable key={item.comp_id} bounds="parent" grid={[50, 50]}>
              <div
                className={styles.pc_icon}
                // style={{
                //   filter: selectedIcons.some(
                //     (selectedItem) => selectedItem.id === item.id
                //   )
                //     ? "drop-shadow(0 0 10px blue)"
                //     : "none",
                // }}
              >
                <PcIcon comp_id={item.comp_id} />
              </div>
            </Draggable>
          );
        })
      )}
    </div>
  );
};

export default PcIcons;
