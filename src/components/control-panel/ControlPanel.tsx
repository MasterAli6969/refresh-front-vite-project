import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import ControlPanelHeader from "./control-panel-components/control-panel-header/ControlPanelHeader";
import ControlPanelItem from "./control-panel-components/control-panel-item/ControlPanelItem";
//СТИЛИ
import styles from "./control_panel.module.scss";

const ControlPanel: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <div className={styles.control_panel_header_container}>
          <ControlPanelHeader />
        </div>
        <div className={styles.control_panel_item_container}>
          <ControlPanelItem />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
