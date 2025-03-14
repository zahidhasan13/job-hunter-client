import App from "@/App";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
    {
        path: "/signin",
        element: <Auth/>
    }
  ]);

  export default router