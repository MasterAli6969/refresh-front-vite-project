import { FC } from "react";

import styles from "./sistem_notice_window.module.scss";

const SistemNoticeWindow: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        <div>
          <p>Refresh Software</p>
          <p>22:13</p>
        </div>
        <div>
          <p>
            Вы были приняты на работу сотрудником Алексей Лариков. Добро
            пожаловать!
          </p>
        </div>
      </div>
      <div className={styles.subdiv}>
        <div>
          <p>Refresh Software</p>
          <p>22:13</p>
        </div>
        <div>
          <p>
            Ваша подписка на продукт Refresh Software истекает! Пожалуйста, не
            забудьте продлить вашу лицензию, чтобы избежать отключения. Спасибо
            за пользование нашим продуктом!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SistemNoticeWindow;
