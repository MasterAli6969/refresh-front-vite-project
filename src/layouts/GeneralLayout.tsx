import { FC } from "react";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import Header from "../components/header/Header";
import ControlPanelHeader from "../components/control-panel/control-panel-header/ControlPanelHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="m-0 p-0 row">
      <div className="m-0 p-0 col-md-2">
        <LeftSidebar />
      </div>
      <div className="m-0 p-0 col-md-10">
        <Header />
        <ControlPanelHeader />
        {children}
      </div>
    </div>
  );
};

export default GeneralLayout;
