import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ERP Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </>
  );
}

export default MyApp;
