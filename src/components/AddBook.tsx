const AddBook = () => {
  //  const [user] = useAuthState(auth);
  //  const { register, handleSubmit } = useForm();

  //  const onSubmit = (data) => {
  //    console.log(data);

  //    fetch("https://desolate-basin-05597.herokuapp.com/item")
  //      .then((res) => res.json())
  //      .then((result) => {
  //        console.log(result);
  //      });

  //  };

  return (
    <>
      <br />
      <h1 className="text-center  fw-bold underline  text-4xl">
        Add Book Here
      </h1>
      <div
        className=" my-10"
        style={{
          backgroundImage:
            "url(https://as1.ftcdn.net/v2/jpg/02/01/71/20/1000_F_201712068_fAJM7cHwBYNcYQZUB6hydCUGXZT8yfGT.jpg)",
        }}
      >
        <br />
        <div className="pb-10 grid items-center">
          <div className="container mx-auto">
            <div className="bar mb-4"></div>
            <form className="add-items mx-auto mt-4 text-2xl text-black fw-bold">
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-7">
                {" "}
                <div>
                  <p>
                    <label htmlFor="email">User Mail</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 text-black rounded outline-none addItems-input"
                    type="email"
                    name="email"
                    id="email"
                    readOnly
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="productName">Book Name</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    name="productName"
                    id="productName"
                    placeholder="Book Name"
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="Author">Book Author Name</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Book Author Name"
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="Genre">Book Genre Name</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    name="genre"
                    id="genre"
                    placeholder="Book Genre Name"
                  />
                </div>
                <div>
                  <p>
                    <label htmlFor="Genre">Book Publication Date</label>
                  </p>
                  <input
                    className="w-full py-2 px-3 mt-1.5 rounded outline-none addItems-input"
                    type="text"
                    name="date"
                    id="date"
                    placeholder="Book Publication Date"
                    min="0"
                    maxLength={4}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-3 p-5">
                <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
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
