/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUser } from "@/features/AllSlices/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

interface SignupFormInputs {
  email: string;
  password: string;
}

export function Signup({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { state } = useLocation();
  let from = state?.from?.pathname || "/";
  const onsubmit = (data: SignupFormInputs) => {
    dispatch(createUser({ email: data.email, password: data.password }));
    toast.success("User Successfully Signed in");
  };
  useEffect(() => {
    if (user.email && !isLoading) {
      navigate(from, { replace: true });
    }
  }, [user.email, isLoading, from]);

  return (
    <div>
      <section className="text-gray-600 body-font relative" {...props}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              SIGN UP
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Your E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Your E-mail"
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
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Your Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Your Password"
                      required
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                      })}
                    />
                  </div>
                </div>
                {errors?.password && (
                  <div className="flex justify-center items-center mb-6">
                    <p className="font-semibold">{errors?.password?.message}</p>
                  </div>
                )}

                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <p className="text-center text-xl font-semibold m-2 pt- ">
            Already have an account?
            <Link to="/login" className="text-rose-600">
              Log in
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
