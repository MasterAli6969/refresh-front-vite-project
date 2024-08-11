import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "../pages/auth-page/authorization/Authorization";
import RestoringAccess from "../pages/auth-page/restoring-access/RestoringAccess";
import PasswordChange from "../pages/auth-page/password-change/PasswordChange";

const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/restoring-access" element={<RestoringAccess />} />
      <Route path="/password-change" element={<PasswordChange />} />
    </Routes>
  );
};
export default AuthRoutes;
