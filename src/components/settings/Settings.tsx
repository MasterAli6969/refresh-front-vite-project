import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import SettingsSidebar from "./settings-components/settings-sidebar/SettingsSidebar";
import GeneralSettings from "./settings-components/general-settings/GeneralSettings";
//СТИЛИ
import styles from "./settings.module.scss";

const Settings: FC = () => {
  return (
    <div className={styles.div}>
      <div>
        <SettingsSidebar />
      </div>
      <div>
        <GeneralSettings />
      </div>
    </div>
  );
};
export default Settings;
