import EventDetail from "../../../components/events/EventDetail";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const EventDetails = ({ eventById }) => {
  return (
    <>
      {/* <Link href="/">
        <button>Go Back</button>
      </Link> */}
      <EventDetail
        image={
          eventById.photoUrl === null
            ? "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            : `https://dev.peddlesoft.com${eventById?.photoUrl}`
        }
        name={eventById.name}
        venue={eventById.venue}
        about={eventById.org.about}
        startDate={eventById.startDate}
        endDate={eventById.endDate}
        startTime={eventById.startTime}
        endTime={eventById.endTime}
        theme={eventById.theme ? eventById.theme : "No Theme"}
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
        eventById(id: 2) {
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
            slug
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
