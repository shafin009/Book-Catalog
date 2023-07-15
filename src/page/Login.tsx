/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "@/features/AllSlices/userSlice";
import { useAppDispatch } from "@/redux/hook";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface LoginFormInputs {
  email: string;
  password: string;
}

export function Login({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const dispatch = useAppDispatch();

  const onsubmit = (data: LoginFormInputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  return (
    <div className="h-full" {...props}>
      <br />
      <section className="text-gray-600 body-font ">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <div className="flex flex-col text-center w-full">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                  LOG IN
                </h1>
              </div>
              <br />
              <form onSubmit={handleSubmit(onsubmit)}>
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email Address"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                    })}
                    required
                  />
                </div>
                {errors?.email && (
                  <div className="flex justify-center items-center mb-6">
                    <p className="font-semibold">{errors?.email?.message}</p>
                  </div>
                )}

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    required
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                    })}
                  />
                </div>

                {errors?.password && (
                  <div className="flex justify-center items-center mb-6">
                    <p className="font-semibold">{errors?.password?.message}</p>
                  </div>
                )}

                <div className="text-center ">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Log in
                  </button>
                  <p className="text-xl font-semibold m-2 p-1 ">
                    Don't have an account?
                    <Link to="/signup" className="text-green-600 ">
                      {" "}
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
