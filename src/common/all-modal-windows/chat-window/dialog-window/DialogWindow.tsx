import { FC, useState, useEffect } from "react";

import OnlineIcon from "../../../../assets/icons/OnlineIcon.svg";
import OflineIcon from "../../../../assets/icons/OflineIcon.svg";

import { dialogData } from "../../../../components/header/data";
import { DialogDataType } from "./dialogWindow.interface";

import styles from "./dialog_window.module.scss";

const DialogWindow: FC = () => {
  const [dialogDataRender, setDialogDataRender] = useState<DialogDataType[]>(
    []
  );

  useEffect(() => {
    setDialogDataRender(dialogData);
  }, [dialogDataRender]);

  return (
    <div className={styles.div}>
      {!dialogDataRender || dialogDataRender.length === 0 ? (
        <h1>Ooops, server error, please wait...</h1>
      ) : (
        dialogDataRender.map((item: DialogDataType) => {
          return (
            <div key={item.id} className={styles.subdiv}>
              <div>
                <h4>{item.name}</h4>
                <div>
                  <p>{item.time}</p>
                  {item.online ? (
                    <img src={OnlineIcon} />
                  ) : (
                    <img src={OflineIcon} />
                  )}
                </div>
              </div>
              <p>{item.lastMessage}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default DialogWindow;
