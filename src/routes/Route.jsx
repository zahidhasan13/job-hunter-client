import App from "@/App";
import Auth from "@/pages/Auth";
import FindJobs from "@/pages/FindJobs";
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
        },
        {
          path: "/jobs",
          element: <FindJobs/>
        }
      ]
    },
    {
        path: "/auth",
        element: <Auth/>
    }
  ]);

  export default router