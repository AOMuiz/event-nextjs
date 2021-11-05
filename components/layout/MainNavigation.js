import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className="py-2 px-2 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
            <img
              src="https://peddlesoft.com/static/frontend/imgs/small_logo.png"
              alt=""
            />
          </div>
          <div className="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
            <a
              href="#"
              className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              All Events
            </a>
            <a
              href="#"
              className="flex items-center justify-center mr-10 text-base text-gray-700 text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out"
            >
              Plans
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <a
            href="#"
            className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out"
          >
            Login
          </a>
          <button className="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
