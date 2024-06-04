import { FC } from "react";

import styles from "./custom_messenger.module.scss";

const CustomMessenger: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_message_window}>
        <div className={styles.incoming_message}>
          <div>
            <h4>PC13</h4>
            <p>22:13</p>
          </div>
          <div>
            <h4>
              Паста - производное от копипаст, copypaste, copy and paste, что
              означает копирование и вставка текста.
            </h4>
          </div>
        </div>
        <div className={styles.outgoing_message}>
          <div>
            <p>22:13</p>
            <h4>Данил Колобородько</h4>
          </div>
          <div>
            <h4>
              Паста - производное от копипаст, copypaste, copy and paste, что
              означает копирование и вставка текста.
            </h4>
          </div>
        </div>
      </div>
      <div className={styles.subdiv_input_message}>
        <input type="text" placeholder="Введите  сообщение" />
        <button>
          <p>Отправить</p>
        </button>
      </div>
    </div>
  );
};

export default CustomMessenger;
