import React from "react";
import link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-3 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-justify">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            <p> Discover Amazing </p>
            {/* <br className="hidden lg:inline-block" /> */}
            Events Around You
          </h1>
          <p className="mb-8 leading-relaxed">
            Peddlesoft is a web and mobile app that provides organizations a
            fast, effective and simple and efficient way to take attendance at
            your event. It can take the attendance of 100 to 1000 persons in 2
            seconds.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              See Event Listings
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://kingnonso.com/media/project/02-dashboard.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
