import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/home",
      element: <PrivateRoute><Home/></PrivateRoute>,
    },
   

  ]);

export default router