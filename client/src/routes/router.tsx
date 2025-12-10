import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Ticket from "../pages/Ticket.tsx";
import Introduce from "../pages/Introduce.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
  },
  {
    path: "/introduce",
    element: <Introduce />,
  },
]);

export default router;
