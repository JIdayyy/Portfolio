import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout/Layout";
import "../styles/index.css";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
