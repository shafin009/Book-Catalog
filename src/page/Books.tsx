// import { IBook } from "../types/globalTypes";
// import { useEffect, useState } from "react";
// import BooksCard from "../components/BooksCard.jsx";

// const Books = () => {
//   const [books, setData] = useState<IBook[]>([]);
//   useEffect(() => {
//     fetch("./data.json")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   //! Dummy Data

//   const status = true;
//   const priceRange = 100;

//   //! **

//   const handleSlider = (value: number[]) => {
//     console.log(value);
//   };

//   return (
//     <div>
//       <div className="flex flex-col sm:flex-row items-center justify-center  space-y-2 sm:space-y-0 sm:space-x-2 pt-7">
//         <div className="relative flex">
//           <label htmlFor="search-field" className="sr-only">
//             Search Books
//           </label>
//           <input
//             type="text"
//             id="search-field"
//             className="w-40 sm:w-56 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"
//             placeholder="Search Books"
//           />
//         </div>
//         <div className="relative flex">
//           <label htmlFor="sort-by" className="sr-only">
//             Sort By
//           </label>
//           <select
//             id="sort-by"
//             className="w-40 sm:w-56 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-700 py-2 px-4 leading-6 transition-colors duration-200 ease-in-out"
//           >
//             <option value="">Sort By</option>
//             <option value="rating">Genre</option>
//             <option value="author">Publication Year</option>
//           </select>
//         </div>
//         <button className="bg-green-500 hover:bg-green-600 text-white rounded-md py-2 px-4 text-base shadow focus:outline-none">
//           Search
//         </button>
//       </div>

//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col text-center w-full mb-20">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
//               All Books
//             </h1>
//           </div>
//           <div className="flex flex-wrap -m-4">
//             {books?.map((book) => (
//               <BooksCard book={book} key={book?._id} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Books;
