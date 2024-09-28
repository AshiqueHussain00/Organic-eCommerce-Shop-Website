import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from "react-icons/fa"; // Importing eye icons from react-icons
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NewsletterThree from "../common/NewsletterThree";
import Footer1 from "../common/footer/footer1";
import BreadCrumbs from '../common/BreadCrumbs';

const CreateAccountForm = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm(); // Destructure reset
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // New state for confirm password visibility

  const onSubmit = (data) => {
    toast.success("Account created successfully!", {
      position: "top-center",
      style: { fontSize: '18px', padding: '30px', width: '400px' },
    });
    console.log(data);
    reset(); // Reset the form fields after successful submission
    navigate("/account/login")

  };



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  return (
    <section>
       <BreadCrumbs />
 <div className="min-h-screen flex items-center justify-center bg-white-100 px-4 sm:px-6 lg:px-8">
  <div className="bg-white p-6 sm:p-8 lg:p-12 rounded shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg">
    <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Create Account</h2>
    <form onSubmit={handleSubmit(onSubmit,)} className="space-y-6">
          
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: "Password is required", minLength: 6 })}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <IoEyeOutline />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"} // Use the new state for visibility
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value => value === watch("password") || "Passwords do not match"
                })}
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility} // Toggle function for confirm password
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
               {showConfirmPassword ? <FaEyeSlash /> : <IoEyeOutline />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* Accept Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", { required: "You must accept the terms and conditions" })}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Accept all terms and conditions
            </label>
            {errors.terms && <p className="text-red-500 text-sm">{errors.terms.message}</p>}
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white-100 py-2 rounded-full hover:bg-primary"
          >
            Create Account
          </button>
        </form>

        {/* Already have an account prompt */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/account/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Toaster Container */}
      <ToastContainer />
    </div>

    <NewsletterThree/>
    <Footer1/>
    </section>
   
  );
};

export default CreateAccountForm;
