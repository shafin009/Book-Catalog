/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import ProductReview from "@/components/ProductReview";
import { addToWishlist } from "@/features/AllSlices/wishlistSlice";
import { useSingleBooksQuery } from "@/features/api/apiSlice";
import { useAppDispatch } from "@/redux/hook";
import { IBook } from "@/types/globalTypes";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const handleAddBook = (book: IBook) => {
    dispatch(addToWishlist(book));
  };

  const { data: book, isLoading, error } = useSingleBooksQuery(id);

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-lg title-font font-medium mb-1">
                Book Name: {book?.title}
              </h1>
              <h1 className="text-gray-900 text-lg  title-font font-medium mb-1">
                Author Name: {book?.author}
              </h1>
              <h3 className="text-gray-900 text-lg  title-font font-medium mb-1">
                Genre Name: {book?.genre}
              </h3>
              <h1 className="text-gray-900 text-lg  title-font font-medium mb-1">
                Publication Date: {book?.publicationDate}
              </h1>
            </div>
          </div>

          <div className="flex justify-center mx-auto mt-6">
            <button
              onClick={() => handleAddBook(book)}
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </section>

      <ProductReview />
    </>
  );
}
