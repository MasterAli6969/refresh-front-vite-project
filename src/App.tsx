import { useLocation } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";
import AuthRoutes from "./routes/AuthRoutes"; // Импортируем компонент AuthRoutes
import "./App.scss";

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith("/auth");
  const isPasswordRecovery = location.pathname.startsWith("/password-recovery");

  const isAuthOrRestoringAccessRoute = isAuthRoute || isPasswordRecovery;

  return (
    <div>{isAuthOrRestoringAccessRoute ? <AuthRoutes /> : <PageRoutes />}</div>
  );
}

export default App;
