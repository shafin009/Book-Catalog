/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  useDeleteBookMutation,
  useSingleBooksQuery,
} from "@/features/api/apiSlice";
import { useAppSelector } from "@/redux/hook";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ProductReview from "./ProductReview";
import Swale from "sweetalert2";

export default function BookDetails() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useSingleBooksQuery(_id);

  const { user } = useAppSelector((state: { user: any }) => state.user);
  const [deleteBook] = useDeleteBookMutation();
  const handleDeleteBook = () => {
    if (user.email === book?.email) {
      Swale.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this book!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      }).then((result: any) => {
        if (result.isConfirmed) {
          deleteBook(_id);
          navigate("/books");
          toast.success("Your book has been deleted.");
        }
      });
    } else {
      toast.error("You are not authorized to delete this book.");
    }
  };
  const handleEditBook = () => {
    if (user?.email === book?.email) {
      navigate(`/update-book/${_id}`);
    } else {
      toast.error("You are not authorized to update this book");
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

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

          <div className="flex justify-center p-5 mx-auto m-3">
            <button
              onClick={handleEditBook}
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded mr-3"
            >
              Update Book
            </button>
            <button
              onClick={handleDeleteBook}
              className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
            >
              Delete Book
            </button>
          </div>
        </div>
      </section>

      <ProductReview _id={_id!} />
    </>
  );
}
