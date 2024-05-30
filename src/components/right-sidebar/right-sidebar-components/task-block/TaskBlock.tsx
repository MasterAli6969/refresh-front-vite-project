import PlusIcon from "../../../../assets/icons/PlusIcon.svg";
import styles from "./task_block.module.scss";

function TaskBlock() {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_head}>
        <h3>Задачи</h3>
        <button>
          <img src={PlusIcon} />
        </button>
      </div>
      <div className={styles.subdiv_item}></div>
    </div>
  );
}

export default TaskBlock;
