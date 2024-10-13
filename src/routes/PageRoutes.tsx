import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import ControlPanelPage from "../pages/control-panel-page/ControlPanelPage";
import ShopPage from "../pages/shop-page/ShopPage";
import TransactionsPage from "../pages/transactions-page/TransactionsPage";
import SandboxPage from "../pages/sandbox-page/SandboxPage";
import ContentLayout from "../layouts/content-layout/ContentLayout";

const PageRoutes: FC = () => {
  return (
    <ContentLayout>
      <Routes>
        <Route path="/" element={<ControlPanelPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </ContentLayout>
  );
};
export default PageRoutes;
