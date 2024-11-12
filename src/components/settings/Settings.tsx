import { FC } from "react";
//МОДУЛИ ДЛЯ РАБОТЫ
//МОДУЛИ ДЛЯ РЕНДЕРА
import SettingsSidebar from "./settings-components/settings-sidebar/SettingsSidebar";
import GeneralSettings from "./settings-components/general-settings/GeneralSettings";
//СТИЛИ
import "./settings.css";

const Settings: FC = () => {
  return (
    <div className={"settings-control-panel-general-default"}>
      <div className="frame-480966378">
        <div className="frame-480966808">
          <SettingsSidebar />
          <GeneralSettings />
        </div>
      </div>
    </div>
  );
};
export default Settings;
