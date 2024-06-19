import { useLocation } from "react-router-dom";

import PanelRotes from "./routes/PanelRotes";
import AuthRoutes from "./routes/AuthRoutes";

import "./App.scss";
function App() {
  const location = useLocation();
  const isRout = location.pathname.startsWith("/auth"); // проверка, если маршрут начинается с /auth/

  return <div>{isRout ? <AuthRoutes /> : <PanelRotes />}</div>;
}

export default App;
