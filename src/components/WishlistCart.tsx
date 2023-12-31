/* eslint-disable @typescript-eslint/no-unused-vars */
import { removeFromWishlist } from "@/features/AllSlices/wishlistSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IBook } from "@/types/globalTypes";

const Wishlist = () => {
  const { books } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  const handleRemoveBook = (books: IBook) => {
    dispatch(removeFromWishlist(books));
  };

  return (
    <div>
      <h1 className="sm:text-3xl p-5 text-2xl font-medium text-center title-font text-gray-900">
        My WishList
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Book Name
              </th>
              <th className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author Name
              </th>
              <th className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50  text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
                Genre Name
              </th>
              <th className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 text-xs text-center font-medium text-gray-500 uppercase tracking-wider">
                Book Status
              </th>
              <th className="px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 text-xs font-medium text-center text-gray-500 uppercase tracking-wider">
                Remove From Wishlist
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books?.map((books: IBook) => (
              <tr key={books?._id}>
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center">
                  <div className="text-sm text-gray-900">{books?.title}</div>
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center">
                  <div className="text-sm text-gray-900">{books?.author}</div>
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center">
                  <div className="text-sm text-gray-900">{books?.genre}</div>
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center">
                  <div className="flex gap-2">
                    <button className="px-2 py-1 bg-indigo-500 text-white text-xs rounded">
                      Read Soon
                    </button>
                    <button className="px-2 py-1 bg-green-500 text-white text-xs rounded">
                      Finished Reading
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 sm:px-6 sm:py-4 text-center">
                  <button
                    onClick={() => handleRemoveBook(books)}
                    className="px-2 py-1 bg-red-500 text-white text-xs rounded"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
