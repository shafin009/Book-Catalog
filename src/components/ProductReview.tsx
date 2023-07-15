/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  useGetCommentsQuery,
  usePostCommentMutation,
} from "@/features/api/apiSlice";
import { ChangeEvent, FormEvent, useState } from "react";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

interface IProps {
  _id: string;
}

export default function ProductReview({ _id }: IProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const { data } = useGetCommentsQuery(_id, {
    refetchOnMountOrArgChange: true,
  });

  const [postComment, { isLoading, isSuccess }] = usePostCommentMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      _id: _id,
      data: { comment: inputValue },
    };
    postComment(options);
    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="Comments"
              className="leading-7 text-sm text-gray-600"
            >
              Comments
            </label>
            <textarea
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleChange}
              value={inputValue}
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Send
            </button>
          </div>
        </div>
      </form>
      <h1 className="text-2xl text-black text-center m-5">All Comments</h1>

      <div className="flex justify-center items-center max-w-7xl mx-auto mt-5 px-5 sm:px-10">
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Book Comments</h2>
          {data?.comments?.map((comment: string, index: number) => (
            <div key={index} className="flex items-center mb-5">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-lg font-bold">
                  {comment[0]?.toUpperCase()}
                </span>
              </div>
              <p className="ml-4 text-gray-800">{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
