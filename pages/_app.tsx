import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { LazyMotion, domAnimation } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  const url = `https://litwora.xyz${router.route}`;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Filip Litwora"
        openGraph={{
          type: "website",
          locale: "en_US",
          url,
          description: "The personal website of Filip Litwora.",
          site_name: "Filip Litwora | litwora.xyz",
          images: [],
        }}
        canonical={url}
      />
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} canonical={url} key={url} />
      </LazyMotion>
    </>
  );
}

export default MyApp;
