import { FC, useState, useEffect } from "react";
import OfflineIcon from "../../../../../../assets/icons/OfflineIcon.svg";
import OflineIcon from "../../../../../../assets/icons/OflineIcon.svg";
import { dialogData } from "../../../../data";
import styles from "./dialog_window.module.scss";

export interface DialogDataType {
  id: number;
  name: string;
  time: string;
  online: boolean;
  lastMessage: string;
}

const DialogWindow: FC = () => {
  const [dialogDataRender, setDialogDataRender] = useState<DialogDataType[]>(
    []
  );

  useEffect(() => {
    setDialogDataRender(dialogData);
  }, []);

  const handleClick = (id: number) => {
    console.log(`Clicked item with id: ${id}`);
  };

  return (
    <div className={styles.div}>
      {!dialogDataRender || dialogDataRender.length === 0 ? (
        <h1>Ooops, server error, please wait...</h1>
      ) : (
        dialogDataRender.map((item: DialogDataType) => {
          return (
            <div
              key={item.id}
              className={styles.subdiv}
              onClick={() => handleClick(item.id)}
            >
              <div>
                <h4>{item.name}</h4>
                <div>
                  <p>{item.time}</p>
                  {item.online ? (
                    <img src={OfflineIcon} alt="Offline" />
                  ) : (
                    <img src={OflineIcon} alt="Online" />
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
