import { FC } from "react";
import ShiftBlock from "./right-sidebar-components/shift-block/ShiftBlock";
import TaskBlock from "./right-sidebar-components/task-block/TaskBlock";
import styles from "./right_sidebar.module.scss";

const RightSidebar: FC = () => {
  return (
    <div className={styles.div}>
      <ShiftBlock />
      <TaskBlock />
    </div>
  );
};

export default RightSidebar;
