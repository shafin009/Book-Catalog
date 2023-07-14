import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
// import Books from "../page/Books";
import NotFound from "../page/NotFound";
import Header from "../page/Header";
import Footer from "../page/Footer";
import { Toaster } from "react-hot-toast";
import Wishlist from "../components/Wishlist.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Toaster />
        <Footer />
      </>
    ),
  },

  // {
  //   path: "/books",
  //   element: (
  //     <>
  //       <Header />
  //       <Books />
  //       <Toaster />
  //       <Footer />
  //     </>
  //   ),
  // },
  {
    path: "/wishlist",
    element: (
      <>
        <Header />
        <Wishlist />
        <Toaster />
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
