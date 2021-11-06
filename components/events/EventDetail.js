import React from "react";

const EventDetail = (props) => {
  return (
    <>
      {/* DETAILS HERO SECTION */}
      <section className="max-w-screen-lg flex w-full md:w-11/12 justify-center items-center border shadow-md p-6">
        <div className="w-full">
          <img
            src={props.image}
            alt={props.name}
            className="mb-2 w-full h-auto "
          />
          <div className="">
            <h1 className="font-bold text-lg px-3 text-center">{props.name}</h1>
            <address>Theme: {props.theme}</address>
            <p className="text-justify">{props.about}</p>
            <div className="flex flex-col py-4 justify-between">
              <div className="">
                <p className="text-lg text-gray-800 py-2">
                  <span>Start Date: </span>
                  {props.startDate}
                </p>
                <p className="text-lg text-gray-800 py-2">
                  <span>End Date: </span>
                  {props.startDate}
                </p>
              </div>
              <p className="text-lg text-gray-800 px-2">
                <span>Venue: </span>
                {props.venue}
              </p>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
              <div className="rounded-md bg-green-600 hover:cursor-pointer disabled:hover:cursor-pointer shadow">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white theme-color-block hover:theme-color-block-hover md:py-4 md:text-lg md:px-10">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DETAILS ABOUT SECTION */}
      <section className="max-w-screen-lg md:w-11/12 py-4 my-3 sm:px-6 lg:px-8 bg-gray-50">
        <div className="lg:text-center">
          <h2 className="text-3xl theme-color-text font-semibold tracking-wide uppercase">
            ABOUT
          </h2>
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
            {props.name}
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <div className="relative inline-block max-w-full overflow-hidden">
                <div className="block max-w-full box-border">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="w-full block px-0"
                    src={props.image}
                  />
                </div>
              </div>
            </div>
            <div className="relative my-4">
              <dt>
                <p className="font-bold leading-6  text-green-700 text-2xl">
                  {props.name}
                </p>
              </dt>
              <dd className="mt-2 text-base py-2 text-center text-gray-500">
                <p>Registration fees</p>
              </dd>
              <div className="lg:w-3/3 w-full overflow-auto my-2">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-3 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        <b>Membership Category</b>
                      </th>
                      <th className="px-3 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        <b>Early-bird</b>
                      </th>
                      <th className="px-3 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        <b>After {props.endDate}</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 py-3">Student</td>
                      <td className="px-3 py-3">NGN1,900.00</td>
                      <td className="px-3 py-3">EEK4,900.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </dl>
        </div>
        {/* DETAILS PRICE SECTION */}
        <section className="w-full my-4">
          <div className="flex flex-wrap py-10 sm:-m-4 md:space-y-0 theme-color-block items-center justify-center bg-green-600">
            <div className="p-4 lg:w-1/4 md:w-1/2 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white theme-color-text mb-5 flex-shrink-0 flex-grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-white text-lg title-font font-medium mb-3">
                  {props.venue}
                </h3>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white theme-color-text mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-white text-lg title-font font-medium mb-3">
                  {props.startDate} - {props.endDate} <br />
                  {props.startTime} - {props.endTime}
                </h3>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white theme-color-text mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-white text-lg title-font font-medium mb-3">
                  SEATS AVAILABLE <br />
                  HURRYUP! EARLY BIRD CLOSES SOON
                </h3>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2 w-full flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white theme-color-text mb-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-10 w-10 "
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="text-white text-lg title-font font-medium mb-3">
                  TECHNICAL SESSIONS
                  <br />
                  DON’T MISS IT
                </h3>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default EventDetail;
