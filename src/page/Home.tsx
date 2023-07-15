import { onAuthStateChanged } from "firebase/auth";
import Book from "../assets/books.jpg";
import { Link } from "react-router-dom";
import { auth } from "@/utility/auth";
import { useAppDispatch } from "@/redux/hook";
import { setLoading, setUser } from "@/features/AllSlices/userSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <section className="text-black  body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Book}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Discover the World of Books: A Journey through Words
            </h3>
            <p className="mb-8 leading-relaxed">
              Welcome to our book website, a place where words come alive and
              stories transport you to new worlds. We believe in the magic of
              books and their ability to ignite our imagination, inspire our
              minds, and touch our hearts.
            </p>
            <div className="flex justify-center">
              <Link to={"/books"}>
                <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  See All Books
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
