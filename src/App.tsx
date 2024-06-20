import { useLocation } from "react-router-dom";
import PanelRotes from "./routes/PanelRotes";
import AuthRoutes from "./routes/AuthRoutes"; // Импортируем компонент AuthRoutes
import "./App.scss";

function App() {
  const location = useLocation();

  const isAuthRoute = location.pathname.startsWith("/authorization");
  const isRestoringAccessRoute =
    location.pathname.startsWith("/restoring-access");
  const isPasswordChange = location.pathname.startsWith("/password-change");

  const isAuthOrRestoringAccessRoute =
    isAuthRoute || isRestoringAccessRoute || isPasswordChange;

  return (
    <div>{isAuthOrRestoringAccessRoute ? <AuthRoutes /> : <PanelRotes />}</div>
  );
}

export default App;
