import { useSingleBooksQuery } from "@/features/api/apiSlice";
import { useNavigate, useParams } from "react-router-dom";



export default function BookDetails() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data: book } = useSingleBooksQuery(_id);

  const { user } = useAppSelector((state: { user: any }) => state.user);

  const handleEditBook = () => {
    if (book && user?.email === book.email) {
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
                Book Name: {book.title}
              </h1>
              <h1 className="text-gray-900 text-lg  title-font font-medium mb-1">
                Author Name: {book.author}
              </h1>
              <h3 className="text-gray-900 text-lg  title-font font-medium mb-1">
                Genre Name: {book.genre}
              </h3>
              <h1 className="text-gray-900 text-lg  title-font font-medium mb-1">
                Publication Date: {book.publicationDate}
              </h1>
            </div>
          </div>

          <div className="flex justify-center mx-auto mt-6">
            <button
              onClick={handleEditBook}
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
            >
              Update Book
            </button>
          </div>
        </div>
      </section>

      <ProductReview _id={_id!} />
    </>
  );
}
