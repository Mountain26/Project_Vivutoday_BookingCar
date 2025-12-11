import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Payment from "../pages/Payment";
import SeatSelection from "../pages/SeatSelection";
import Ticket from "../pages/Ticket.tsx";
import Introduce from "../pages/Introduce.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <></>,
      },
      {
        path: "seat-selection",
        element: <SeatSelection />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
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
