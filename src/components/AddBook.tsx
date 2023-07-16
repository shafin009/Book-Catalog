/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useAppSelector } from "@/redux/hook";
import { useForm } from "react-hook-form";
import { useAddbooksMutation } from "@/features/api/apiSlice";
import { toast } from "react-hot-toast";

interface BookFormValues {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const AddBook = () => {
  const { user } = useAppSelector((state) => state.user);

  const { register, handleSubmit } = useForm<BookFormValues>();

  const [postBook] = useAddbooksMutation();

  const onSubmit = (data: BookFormValues) => {
    const book = {
      ...data,
      email: user?.email!,
    };

    postBook({ data: book })
      .unwrap()
      .then(() => {
        toast.success("Successfully Created Book");
      })
      .catch(() => {
        toast.error("Cannot create book");
      });
  };

  return (
    <>
      <br />
      <h1 className="text-center fw-bold underline text-4xl">Add Book Here</h1>
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
            <div className="bar mb-4"></div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="add-items mx-auto mt-4 text-2xl text-black fw-bold"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-7">
                <div>
                  <p>
                    <label htmlFor="email">User Mail</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 text-black rounded outline-none addItems-input"
                    type="email"
                    id="email"
                    readOnly
                    value={user?.email!}
                    {...register("email", { required: true })}
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="title">Book Name</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    id="title"
                    placeholder="Title Name"
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
                    min="0"
                    maxLength={4}
                    {...register("publicationDate", { required: true })}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-3 p-5">
                <button
                  type="submit"
                  className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
