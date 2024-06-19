import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/auth/Auth";

const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
export default AuthRoutes;
