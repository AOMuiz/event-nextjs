import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react";
import EventList from "../components/events/EventList";
import Hero from "../components/layout/Hero";

export default function Home({ events }) {
  const initialState = events;
  const [event, setEvent] = useState(initialState);
  console.log("events", events);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>PeddleSoft Events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div></div>
      <h2 className="text-center font-bold capitalize text-lg">
        All Event Listings
      </h2>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://dev.peddlesoft.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query AllEvent {
        events {
          id
          uuid
          name
          venue
          photoUrl
          startDate
          endDate
          flyer
          org {
            about
          }
        }
      }
    `,
  });

  return {
    props: {
      events: data.events,
    },
  };
}
