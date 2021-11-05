import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dev.peddlesoft.com/graphql",
  cache: new InMemoryCache(),
});

export default async (req, res) => {
  const search = req.body;
  try {
    const { data } = await client.query({
      query: gql`
        query AllEvent {
          events {
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
    res.status(200).json({ events: data.events, error: null });
  } catch (error) {
    if (error.message === "404: Not Found") {
      res.status(400).json({
        events: null,
        error: "No Events Found",
      });
    } else {
      res
        .status(500)
        .json({ events: null, error: "Internal Error Please try again" });
    }
  }
};
