import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import ControlPanelPage from "../pages/control-panel-page/ControlPanelPage";
import ShopPage from "../pages/shop-page/ShopPage";
import TransactionsPage from "../pages/transactions-page/TransactionsPage";
import SandboxPage from "../pages/sandbox-page/SandboxPage";
import ContentLayout from "../layouts/content-layout/ContentLayout";
import ReservationPage from "../pages/reservation-page/ReservationPage";
import SettingsPage from "../pages/settings-page/SettingsPage";
import HistoryPage from "../pages/history-page/HistoryPage";
import Users from "../components/users/Users";

const PageRoutes: FC = () => {
  return (
    <ContentLayout>
      <Routes>
        <Route path="/" element={<ControlPanelPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sandbox" element={<SandboxPage />} />
      </Routes>
    </ContentLayout>
  );
};
export default PageRoutes;
