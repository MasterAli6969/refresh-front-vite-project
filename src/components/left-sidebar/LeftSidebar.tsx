import { FC, useState, useEffect } from "react";
import { leftSidebarDataType } from "./leftSidebar.interface";
import RefreshLogo from "../../assets/img/RefreshLogo.png";
import { leftSidebarData } from "./data";
import styles from "./left_sidebar.module.scss";

const LeftSidebar: FC = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleLiClick = (itemId: number) => {
    setActiveItemId(itemId);
  };

  useEffect(() => {
    if (leftSidebarData.length > 0 && activeItemId === null) {
      setActiveItemId(leftSidebarData[0].id);
    }
  }, [leftSidebarData, activeItemId]);

  return (
    <div className={styles.div}>
      <div className={styles.subdiv_logo}>
        <img src={RefreshLogo} />
        <h1>REFRESH</h1>
      </div>
      <ul className={styles.subdiv_list}>
        {!leftSidebarData || leftSidebarData.length === 0 ? (
          <h1>Ooops, server error, please wait...</h1>
        ) : (
          leftSidebarData.map((item: leftSidebarDataType) => {
            const Icon = item.icon;
            return (
              <li
                key={item.id}
                className={activeItemId === item.id ? styles.active : ""}
                onClick={() => handleLiClick(item.id)}
              >
                <div>
                  <Icon />
                </div>
                {item.text}
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default LeftSidebar;
