import { FC } from "react";

import Messenger from "../messenger/Messenger";
import styles from "./client_messanger.module.scss";

const ClientMessanger: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <p>ПК №13</p>
        <button>Закрыть</button>
      </div>
      <div>
        <Messenger />
      </div>
    </div>
  );
};

export default ClientMessanger;
