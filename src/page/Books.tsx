import { IBook } from "../types/globalTypes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setSearchQuery,
  setFilterGenre,
  setFilterYear,
} from "../features/AllSlices/productSlice.tsx";
import BooksCard from "../components/BooksCard.jsx";
import { useAppSelector } from "@/redux/hook.ts";

const Books = () => {
  const [books, setData] = useState<IBook[]>([]);
  const dispatch = useDispatch();
  const { searchQuery, filterGenre, filterYear } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const filteredBooks = books.filter((book) => {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();

    const matchesSearchQuery =
      !searchQuery ||
      book.title.toLowerCase().includes(lowerCaseSearchQuery) ||
      book.author.toLowerCase().includes(lowerCaseSearchQuery) ||
      book.genre.toLowerCase().includes(lowerCaseSearchQuery);

    return matchesSearchQuery;
  });

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleFilterGenreChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setFilterGenre(event.target.value));
  };

  const handleFilterYearChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setFilterYear(Number(event.target.value)));
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center  space-y-2 sm:space-y-0 sm:space-x-2 pt-7">
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
            <option value=""> Filter By Genre</option>
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
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20"></div>
          <div className="flex flex-wrap -m-4">
            {filteredBooks.map((book) => (
              <div className="p-4 md:w-1/3 flex" key={book?._id}>
                <BooksCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
