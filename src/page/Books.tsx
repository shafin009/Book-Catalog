/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../types/globalTypes";
import { useDispatch } from "react-redux";
import {
  setSearchQuery,
  setFilterGenre,
  setFilterYear,
} from "../features/AllSlices/productSlice.tsx";
import BooksCard from "../components/BooksCard.jsx";
import { useAppSelector } from "@/redux/hook.ts";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "@/features/api/apiSlice.tsx";

const Books = () => {
  const dispatch = useDispatch();
  const { searchQuery, filterGenre, filterYear } = useAppSelector(
    (state) => state.product
  );

  const { data } = useGetBooksQuery(undefined);

  const filteredBooks = data?.data.filter(
    (book: {
      title: string;
      author: string;
      genre: string;
      publicationDate: string;
    }) => {
      const lowerCaseSearchQuery = searchQuery.toLowerCase();

      const matchesSearchQuery =
        !searchQuery ||
        book.title.toLowerCase().includes(lowerCaseSearchQuery) ||
        book.author.toLowerCase().includes(lowerCaseSearchQuery) ||
        book.genre.toLowerCase().includes(lowerCaseSearchQuery);

      const matchesFilterGenre = !filterGenre || book.genre === filterGenre;

      const matchesFilterYear =
        !filterYear || parseInt(book.publicationDate) === parseInt(filterYear);

      return matchesSearchQuery && matchesFilterGenre && matchesFilterYear;
    }
  );
  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleFilterGenreChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const genre = event.target.value;
    dispatch(setFilterGenre(genre));
  };

  const handleFilterYearChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const year = event.target.value;
    dispatch(setFilterYear(year));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 pt-7">
        <div className="relative flex">
          <label htmlFor="search-field" className="sr-only">
            Search Books
          </label>
          <input
            type="text"
            id="search-field"
            className="w-40 sm:w-56 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"
            placeholder="Search Books"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <div className="relative flex">
          <label htmlFor="sort-by" className="sr-only">
            Sort By
          </label>
          <select
            id="sort-by"
            className="w-40 sm:w-56 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"
            value={filterGenre}
            onChange={handleFilterGenreChange}
          >
            <option value="">Filter By Genre</option>
            <option value="Fiction">Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <div className="relative flex">
          <label htmlFor="filter-by-year" className="sr-only">
            Filter By Year
          </label>
          <select
            id="filter-by-year"
            className="w-40 sm:w-56 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"
            value={filterYear}
            onChange={handleFilterYearChange}
          >
            <option value="">Filter By Year</option>
            <option value="1997">1997</option>
            <option value="2018">2018</option>
            <option value="2003">2003</option>
          </select>
        </div>
      </div>
      <h1 className="sm:text-3xl p-5 text-2xl font-medium text-center title-font text-gray-900">
        All Books
      </h1>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto flex flex-wrap -m-4">
          {filteredBooks &&
            filteredBooks
              .reverse()
              .slice(0, 10)
              .map((book: IBook) => (
                <div className="p-4 md:w-1/3" key={book?._id}>
                  <BooksCard book={book} />
                </div>
              ))}
        </div>
      </div>

      <Link to={"/addbooks"}>
        <button className="m-5 flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Add New Books
        </button>
      </Link>
    </div>
  );
};

export default Books;
