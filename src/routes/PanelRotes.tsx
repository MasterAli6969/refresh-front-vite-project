import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import ControlPanel from "../pages/central-panel/ControlPanel";
import GeneralLayout from "../layouts/GeneralLayout";

const PanelRotes: FC = () => {
  return (
    <GeneralLayout>
      <Routes>
        <Route path="/" element={<ControlPanel />} />
      </Routes>
    </GeneralLayout>
  );
};
export default PanelRotes;
