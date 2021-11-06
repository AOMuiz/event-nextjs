import "tailwindcss/tailwind.css";
import Layout from "../components/layout/Layout";
import { ApolloProvider } from "@apollo/client";
import client from "../client";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  );
}

export default MyApp;
