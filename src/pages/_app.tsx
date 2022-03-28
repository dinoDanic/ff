import { Footer, Navbar } from "components";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global";
import { lightTheme } from "styles/theme/theme";
import { useRouter } from "next/router";
import "../styles/fonts.css";
import "../styles/carousel.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const canonicalUrl = (
    `http://localhost:3000` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <>
      <DefaultSeo canonical={canonicalUrl} />
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
