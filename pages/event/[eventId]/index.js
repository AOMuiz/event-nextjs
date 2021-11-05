import EventDetail from "../../../components/events/EventDetail";
import Link from "next/link";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const EventDetails = ({ eventById }) => {
  return (
    <>
      {/* <Link href="/">
        <button>Go Back</button>
      </Link> */}
      <EventDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/2017_0423_Ravenna_%28132%29.jpg/1024px-2017_0423_Ravenna_%28132%29.jpg"
        name={eventById.name}
        venue={eventById.venue}
        about={eventById.org.about}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  let id = context.params.id;
  const client = new ApolloClient({
    uri: "https://dev.peddlesoft.com/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query EventById {
        eventById(id: 1) {
          id
          uuid
          name
          venue
          photoUrl
          minutesUrl
          eventState
          startDate
          endDate
          startTime
          endTime
          minutes
          externalDomain
          paid
          theme
          onlineMeetingLink
          venue
          flyer
          photoUrl
          code
          org {
            about
          }
        }
      }
    `,
  });

  return {
    props: {
      eventById: data.eventById,
    },
  };
};

export default EventDetails;
