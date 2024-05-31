import { FC } from "react";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import Header from "../components/header/Header";
import CentralHeader from "../components/central-header/CentralHeader";
import RightSidebar from "../components/right-sidebar/RightSidebar";

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
        <div className="m-0 p-0 row">
          <div className="m-0 p-0 col-md-9">
            <CentralHeader />
            {children}
          </div>
          <div className="m-0 p-0 col-md-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralLayout;
