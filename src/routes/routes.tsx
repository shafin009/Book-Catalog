import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Books from "../page/Books";
import NotFound from "../page/NotFound";
import Header from "../page/Header";
import Footer from "../page/Footer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },

  {
    path: "/books",
    element: (
      <>
        <Header />
        <Books />
        <Footer />
      </>
    ),
  },

  {
    path: "*",
    element: (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    ),
  },
]);

export default routes;
