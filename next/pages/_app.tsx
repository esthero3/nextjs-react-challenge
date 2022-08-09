import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppPage from "../_pages/AppPage"; //contains the logic of the main _app page
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AppPage>
        <Component {...pageProps} />
      </AppPage>
    </Layout>
  );
}

export default MyApp;
