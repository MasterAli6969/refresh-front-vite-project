import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ControlPanelPage from "../pages/control-panel-page/ControlPanelPage";
import GeneralLayout from "../layouts/GeneralLayout";

const PanelRotes: FC = () => {
  return (
    <GeneralLayout>
      <Routes>
        <Route path="/" element={<ControlPanelPage />} />
      </Routes>
    </GeneralLayout>
  );
};
export default PanelRotes;
