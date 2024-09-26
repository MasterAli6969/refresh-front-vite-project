import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/auth-page/AuthPage";
import PasswordRecovery from "../components/password-recovery/PasswordRecovery";

const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
    </Routes>
  );
};
export default AuthRoutes;
