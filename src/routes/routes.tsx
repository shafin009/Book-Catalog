import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../page/Home";
import Books from "../page/Books";
import NotFound from "../page/NotFound";
import Header from "../page/Header";
import Footer from "../page/Footer";
import { Toaster } from "react-hot-toast";
import Wishlist from "../components/Wishlist.tsx";
import AddBook from "../components/AddBook.tsx";
import BookDetails from "../components/BookDetails.tsx";
import { Signup } from "@/page/Signup.tsx";
import { Login } from "@/page/Login.tsx";

const Router: RouteObject[] = [
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
  {
    path: "/books",
    element: (
      <>
        <Header />
        <Books />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/addbooks",
    element: (
      <>
        <Header />

        <AddBook />

        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/book-details/:_id",
    element: (
      <>
        <Header />
        <BookDetails />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Header />
        <Signup />
        <Toaster />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
        <Toaster />
        <Footer />
      </>
    ),
  },
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
];

const routes = createBrowserRouter(Router);

export default routes;
