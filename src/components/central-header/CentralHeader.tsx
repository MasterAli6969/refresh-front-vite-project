import { FC } from "react";
import EyeSlashIcon from "../../assets/icons/EyeSlashIcon.svg";
import DownwardTrend from "../../assets/icons/DownwardTrend.svg";
import { centralHeaderDataType } from "./centralHeader.interface";
import { centralHeaderData } from "./data";
import styles from "./central_header.module.scss";

const CentralHeader: FC = () => {
  return (
    <div className={styles.div}>
      <div className={styles.subdiv_title}>
        <h2>Основные показатели смены</h2>
        <div>
          <img src={EyeSlashIcon} />
        </div>
      </div>
      <div className={styles.subdiv_indicators}>
        {!centralHeaderData || centralHeaderData.length === 0 ? (
          <h1>Ooops, server error, please wait...</h1>
        ) : (
          centralHeaderData.map((item: centralHeaderDataType) => {
            return (
              <div key={item.id} className={styles.subdiv_indicators_item}>
                <div>
                  <h3>{item.title}</h3>
                  <div>
                    <h1>{item.value} ₽</h1>
                    <div>
                      <img src={DownwardTrend} />
                      <p>{item.trendProcent}%</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CentralHeader;
