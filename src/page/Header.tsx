import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="text-white body-font bg-blue-500	">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-book-half w-10  h-10 text-white p-2 bg-red-500 rounded-md"
            >
              {" "}
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />{" "}
            </svg>
            <Link to={"/"}>
              <span className="ml-3 text-xl text-white">Novel Haven</span>
            </Link>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/books"}>
              <button className="inline-flex items-center bg-fuchsia-300	 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-5 text-black">
                All Books
              </button>
            </Link>
            <button className="inline-flex items-center bg-fuchsia-300	border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 mr-5 text-black">
              Add Books
            </button>
            <Link to={"/wishlist"}>
              <button className="inline-flex items-center bg-fuchsia-300 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-5 text-black">
                Wish List
              </button>
            </Link>
            <button className="inline-flex items-center bg-fuchsia-300 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-5 text-black">
              Sign In
            </button>
            <button className="inline-flex items-center bg-fuchsia-300 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0 mr-5 text-black">
              Sign Up
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
