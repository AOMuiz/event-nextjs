import React from "react";
import Card from "../ui/Card";
import { useRouter } from "next/router";

const EventItem = ({ event }) => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + event.uuid);
  }

  return (
    <Card>
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={
              event.photoUrl === null
                ? "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
                : `https://dev.peddlesoft.com${event?.photoUrl}`
            }
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {event.name}
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">
            {event.org.about.substring(0, 100)}
          </p>
          <p className="font-normal text-gray-700 mb-3">
            <span className="font-semibold capitalize text-black">
              Start Date:{" "}
            </span>{" "}
            {event.startDate}
          </p>
          <div
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center hover:cursor-pointer"
            onClick={showDetailsHandler}
          >
            Read more
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventItem;
