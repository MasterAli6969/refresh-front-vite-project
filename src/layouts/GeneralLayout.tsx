import { FC } from "react";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import Header from "../components/header/Header";
import CentralHeader from "../components/central-header/CentralHeader";
import RightSidebar from "../components/right-sidebar/RightSidebar";
import { leftSidebarData } from "../pages/data";

interface LayoutProps {
  children: React.ReactNode;
}

const GeneralLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="row p-0">
      <div className="col-md-2 p-0">
        <LeftSidebar leftSidebarData={leftSidebarData} />
      </div>
      <div className="col-md-10 p-0">
        <Header />
        <div className="row p-0">
          <div className="col-md-12 p-0">
            <CentralHeader />
          </div>
          <div className="col-md-9 p-0">{children}</div>
          <div className="col-md-3 p-0">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
