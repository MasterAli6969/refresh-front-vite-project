import { FC } from "react";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import Header from "../components/header/Header";

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
        {children}
      </div>
    </div>
  );
};

export default GeneralLayout;
