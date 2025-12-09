import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Auth from "../pages/Auth.tsx";
import Profile from "../pages/Profile.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Auth />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;
