import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from "react-icons/fa"; // Importing eye icons from react-icons
import { IoEyeOutline } from "react-icons/io5";

const SignInForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    shouldUseNativeValidation: false,
  });

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggles the password input type between 'password' and 'text'
  };

  const onSubmit = (data) => {
    toast.success("Login Successful!", {
      position: "top-center",
      style: { 
        fontSize: '18px', 
        padding: '30px',  
        width: '300px',  
      },
    });
    console.log(data);
    reset(); // Resetting the form after successful submission
  };

  const onError = () => {
    toast.error("Please check the fields and try again", {
      position: "top-center",
      style: { 
        fontSize: '18px', 
        padding: '20px', 
        width: '400px',
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-100 p-4 sm:p-6">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: true })}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
          </div>

          {/* Password field with toggle visibility */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                id="password"
                {...register("password", { required: true })}
                className="mt-1 p-2 w-full border border-gray-300 rounded pr-10" // Adding padding to the right for the eye icon
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility} // Toggles password visibility when clicked
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeOutline />} {/* Displaying eye/eye-slash icon based on state */}
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                {...register("remember")}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div>
              <a href="/forgot-password" className="text-sm text-gray-900 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
            </p>
          </div>
        </form>
      </div>

      {/* Toaster Container */}
      <ToastContainer />
    </div>
  );
};

export default SignInForm;
