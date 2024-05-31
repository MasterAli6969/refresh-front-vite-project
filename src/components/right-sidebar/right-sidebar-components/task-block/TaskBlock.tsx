import PlusIcon from "../../../../assets/icons/PlusIcon.svg";
import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";
import {
  TaskBlockDataPropsTypes,
  TaskBlockDataTypes,
  TaskItemData,
} from "../../rightSidebarType.interfce";
import styles from "./task_block.module.scss";
import { FC } from "react";

const TaskBlock: FC<TaskBlockDataPropsTypes> = ({ taskBlockData }) => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_head}>
        <h3>Задачи</h3>
        <button>
          <img src={PlusIcon} />
        </button>
      </div>
      <div className={styles.subdiv_item}>
        {!taskBlockData || taskBlockData.length === 0 ? (
          <h1>Ooops, server error, please wait...</h1>
        ) : (
          taskBlockData.map((item: TaskBlockDataTypes) => {
            return (
              <div key={item.id} className={styles.task_date_title}>
                <p>{item.date}</p>
                {!item.taskItemData || item.taskItemData.length === 0 ? (
                  <h1>Ooops, server error, please wait...</h1>
                ) : (
                  item.taskItemData.map((subitem: TaskItemData) => {
                    return (
                      <div key={subitem.id} className={styles.task_item}>
                        <div>
                          <img src={subitem.avatar} />
                        </div>
                        <div>
                          <div>
                            {subitem.online && <img src={OnlineIcon} />}
                            <h3>{subitem.name}</h3>
                          </div>
                          <p>Нажмите для просмотра задания</p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TaskBlock;
