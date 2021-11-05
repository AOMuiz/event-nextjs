import React from "react";

const EventDetail = (props) => {
  return (
    <>
      <section className="flex flex-grow w-full justify-center items-center m-2 p-2 border shadow-md">
        <div className="w-full">
          <img src={props.image} alt={props.name} className="mb-2" />
          <h1 className="font-bold text-lg text-center">{props.name}</h1>
          <address>{props.venue}</address>
          <p>{props.about}</p>
          <div className="flex justify-between">
            <div>
              <p>startDate: 2021-11-01</p>
              <p>endDate: 2021-11-02</p>
            </div>
            <p>Venue: Abuja</p>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl theme-color-text font-semibold tracking-wide uppercase">
            ABOUT
          </h2>
          <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl">
            Samantha Graves Event
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
                    className="max-w-full block border-2 px-0"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                  />
                </div>
                <img
                  src="/_next/image?url=http%3A%2F%2Fdev.peddlesoft.com%2Fmedia%2Fevents%2FScreen_Shot_2021-10-25_at_6.05.10_PM.png&amp;w=1920&amp;q=75"
                  decoding="async"
                  data-nimg="true"
                  className="object-contain absolute border-none min-w-full max-w-full min-h-full max-h-full m-auto"
                  srcSet="/_next/image?url=http%3A%2F%2Fdev.peddlesoft.com%2Fmedia%2Fevents%2FScreen_Shot_2021-10-25_at_6.05.10_PM.png&amp;w=828&amp;q=75 1x, /_next/image?url=http%3A%2F%2Fdev.peddlesoft.com%2Fmedia%2Fevents%2FScreen_Shot_2021-10-25_at_6.05.10_PM.png&amp;w=1920&amp;q=75 2x"
                />
              </div>
            </div>
            <div className="relative">
              <dt>
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Samantha Graves Event
                </p>
              </dt>
              <dd className="mt-2 text-base text-justify text-gray-500">
                <p></p>
              </dd>
              <h2>Registration fees</h2>
              <div className="lg:w-3/3 w-full  overflow-auto">
                <table className="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        <b>Membership Category</b>
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        <b>Early-bird</b>
                      </th>
                      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        <b>After Nov, 12. 2021</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3">Student</td>
                      <td className="px-4 py-3">NGN1,900.00</td>
                      <td className="px-4 py-3">EEK4,900.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
