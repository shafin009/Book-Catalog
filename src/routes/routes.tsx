import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Books from "../page/Books";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/books",
    element: <Books />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
