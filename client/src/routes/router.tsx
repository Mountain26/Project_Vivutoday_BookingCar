import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App.tsx";
import Payment from "../pages/Payment";
import SeatSelection from "../pages/SeatSelection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="seat-selection" replace />,
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
  
]);

export default router;
