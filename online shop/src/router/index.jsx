import { createBrowserRouter,  } from "react-router-dom";
import Home from "../pages/home";
import Test from "../pages/test";
import Layout from "../pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/test",
        element: <Test />
      }
    ]
  }
]);

export default router