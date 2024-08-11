import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import GeneralLayout from "../layouts/GeneralLayout";
import ControlPanelPage from "../pages/control-panel-page/ControlPanelPage";
import ShopPage from "../pages/shop-page/ShopPage";

const PageRoutes: FC = () => {
  return (
    <GeneralLayout>
      <Routes>
        <Route path="/" element={<ControlPanelPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </GeneralLayout>
  );
};
export default PageRoutes;
