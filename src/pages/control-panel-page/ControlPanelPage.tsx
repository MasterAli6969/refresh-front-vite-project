import { FC } from "react";

import ControlPanel from "../../components/control-panel/ControlPanel";

import styles from "./central_panel_page.module.scss";

const ControlPanelPage: FC = () => {
  return (
    <div className={styles.div}>
      <ControlPanel />
    </div>
  );
};

export default ControlPanelPage;
