import "../styles/globals.css";
import type { AppProps } from "next/app";
import ContextLayout from "../_pages/ContextLayout"; //contains the logic of the main _app page
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ContextLayout>
        <Component {...pageProps} />
      </ContextLayout>
    </Layout>
  );
}

export default MyApp;
