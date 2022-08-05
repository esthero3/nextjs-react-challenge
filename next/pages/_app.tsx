import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppPage from "../_pages/AppPage"; //contains the logic of the main _app page

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppPage>
      <Component {...pageProps} />
    </AppPage>
  );
}

export default MyApp;
