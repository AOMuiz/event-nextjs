import React from "react";
import EventItem from "./EventItem";

const EventList = ({ events }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {events.map((event) => {
          return (
            <div key={event.uuid} className="max-w-lg mx-auto">
              <EventItem event={event} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EventList;
