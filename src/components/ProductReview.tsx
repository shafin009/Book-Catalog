const dummyComments = [
  "Bhalo na",
  "Ki shob ghori egula??",
  "Eta kono product holo ??",
  "200 taka dibo, hobe ??",
];

export default function ProductReview() {
  return (
    <div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <div className="relative flex-grow w-full">
          <label htmlFor="Comments" className="leading-7 text-sm text-gray-600">
            Comments
          </label>
          <input
            type="text"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="flex justify-center w-full">
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send
          </button>
        </div>
      </div>
      <h1 className="text-2xl text-black text-center m-5">All Comments</h1>
      <div className="flex justify-center items-center max-w-7xl  mx-auto mt-5 px-5 sm:px-10">
        <div className="mt-10">
          {dummyComments.map((comment, index) => (
            <div key={index} className="flex gap-3 items-center mb-5">
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
