import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "../pages/auth/authorization/Authorization";
import RestoringAccess from "../pages/auth/restoring-access/RestoringAccess";

const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/authorization" element={<Authorization />} />
      <Route path="/restoring-access" element={<RestoringAccess />} />
    </Routes>
  );
};
export default AuthRoutes;
