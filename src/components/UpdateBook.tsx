/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  useSingleBooksQuery,
  useUpdateBookMutation,
} from "@/features/api/apiSlice";

interface BookForm {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

export const UpdateBook = () => {
  const { id } = useParams();
  const { data: book } = useSingleBooksQuery(id);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<BookForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [updateBookMutation] = useUpdateBookMutation();

  const onSubmit = async (formData: BookForm) => {
    setIsSubmitting(true);

    try {
      await updateBookMutation({ data: formData });

      console.log({ data: formData });
      toast.success("Book updated successfully");

      navigate(`/book-details/${id}`);

      setIsSubmitting(false);
    } catch (error) {
      toast.error("Failed to update book");

      setIsSubmitting(false);
    }
  };

  return (
    <>
      <br />
      <h1 className="text-center fw-bold underline text-4xl">Update Book</h1>
      <div
        className="my-10"
        style={{
          backgroundImage:
            "url(https://as1.ftcdn.net/v2/jpg/02/01/71/20/1000_F_201712068_fAJM7cHwBYNcYQZUB6hydCUGXZT8yfGT.jpg)",
        }}
      >
        <br />
        <div className="pb-10 grid items-center">
          <div className="container mx-auto">
            <div className="bar mb-4" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="add-items mx-auto mt-4 text-2xl text-black fw-bold"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-7">
                <div>
                  <p>
                    <label htmlFor="title">Book Name</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    id="title"
                    placeholder="Book Name"
                    defaultValue={book?.title}
                    {...register("title", { required: true })}
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="author">Book Author Name</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    id="author"
                    placeholder="Book Author Name"
                    defaultValue={book?.author}
                    {...register("author", { required: true })}
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="genre">Book Genre Name</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    id="genre"
                    placeholder="Book Genre Name"
                    defaultValue={book?.genre}
                    {...register("genre", { required: true })}
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="publicationDate">
                      Book Publication Date
                    </label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    id="publicationDate"
                    placeholder="Book Publication Date"
                    defaultValue={book?.publicationDate}
                    {...register("publicationDate", { required: true })}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-3 p-5">
                <button
                  type="submit"
                  className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Update Book"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
