import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Ticket from "../pages/Ticket.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ticket",
    element: <Ticket />
  }
]);

export default router;
