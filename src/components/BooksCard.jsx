// import React from "react";
// import { useAppDispatch } from "../redux/hook";
// import { toast } from "react-hot-toast";
// import IBook from '../types/globalTypes'




// export default function BooksCard({ IBook }) {
//   const dispatch = useAppDispatch();


//   const handleAddBook = (IBook) => {
//     dispatch(handleAddWishlist(book));
//     toast({
//       "Books Added",
//     });
//   };

//   return (
//     <div>
//       <div className="p-4 md:w-1/3">
//         <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
//           <div className="flex items-center mb-3">
//             <h2 className="text-gray-900 text-lg title-font font-medium">
//               {book?.title}
//             </h2>
//           </div>
//           <div className="flex-grow">
//             <p className="leading-relaxed text-base">{book?.author}</p>
//             <p className="leading-relaxed text-base">{book?.genre}</p>
//             <p className="leading-relaxed text-base">{book?.publicationDate}</p>
//             <div className="flex justify-between items-center">
//               <button className="mt-3 text-indigo-500 inline-flex items-center">
//                 See More
//                 <svg
//                   fill="none"
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   className="w-4 h-4 ml-2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7"></path>
//                 </svg>
//               </button>
//               <button onClick={() => handleAddBook(book)}  className="mt-3 text-indigo-500 inline-flex items-center">
//                 WishList
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   className="bi bi-bookmark w-4 h-4 ml-2"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
