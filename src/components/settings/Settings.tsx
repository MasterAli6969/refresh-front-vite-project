import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import SettingsSidebar from "./settings-components/settings-sidebar/SettingsSidebar";
import GeneralSettings from "./settings-components/general-settings/GeneralSettings";
//СТИЛИ

const Settings: FC = () => {
  return (
    <div>
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
