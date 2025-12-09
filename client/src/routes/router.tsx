import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Introduce from "../pages/Introduce.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/introduce",
    element: <Introduce />,
  },
  {
  }
]);

export default router;
