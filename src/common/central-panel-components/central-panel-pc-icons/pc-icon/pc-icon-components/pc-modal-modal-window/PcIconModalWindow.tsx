import { FC } from "react";
import ArrowChekRight from "../../../../../../assets/icons-svg-components/ArrowChekRight";
import classNames from "classnames";
import { PcIconModalWindowPropsData } from "./pcModalWindow.interface";
import styles from "./pc_icon_modal_window.module.scss";

const PcIconModalWindow: FC<PcIconModalWindowPropsData> = ({
  pcIconModalWindowData,
  pcStatus,
}) => {
  console.log(pcStatus, "СТАТУС");

  return (
    <div className={styles.div}>
      <div className={styles.subdiv}>
        {pcStatus === "Active" && (
          <div className={styles.drop_menu}>
            <div className="btn-group dropend">
              <div data-bs-toggle="dropdown" aria-expanded="false">
                <div>
                  <p>
                    Клиент:{" "}
                    <span>{pcIconModalWindowData.dropData?.client}</span>
                  </p>
                  <p>
                    Осталось:{" "}
                    <span>{pcIconModalWindowData.dropData?.timeLeft}</span>
                  </p>
                </div>
                <ArrowChekRight color="#ffff" />
              </div>
              <ul className="dropdown-menu">
                {!pcIconModalWindowData.dropData?.dropDataItem ||
                pcIconModalWindowData.dropData?.dropDataItem.length === 0 ? (
                  <h1>Ooops, server error, please wait...</h1>
                ) : (
                  pcIconModalWindowData.dropData?.dropDataItem.map((item) => (
                    <li key={item.id}>
                      <a href={item.url}>
                        <p>{item.title}</p>
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        )}
        <ul>
          {!pcIconModalWindowData.modalListItem ||
          pcIconModalWindowData.modalListItem.length === 0 ? (
            <h1>Ooops, server error, please wait...</h1>
          ) : (
            pcIconModalWindowData.modalListItem.map((item) => (
              <li
                className={classNames(
                  {
                    [styles._disable]:
                      pcStatus === "Servicing" && item.id !== 5,
                  },
                  {
                    [styles._disable]: pcStatus === "Included" && item.id === 8,
                  },
                  {
                    [styles._disable]:
                      pcStatus === "No Active" &&
                      item.id !== 2 &&
                      item.id !== 6 &&
                      item.id !== 8 &&
                      item.id !== 10,
                  }
                )}
                key={item.id}
              >
                <a href={item.url}>
                  {item.icon && <img src={item.icon} alt={item.title} />}
                  <p>{item.title}</p>
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default PcIconModalWindow;
