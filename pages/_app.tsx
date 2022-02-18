import '../styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as gtag from '../packages/lib/gtag';
import NavBar from '../packages/components/Navigation/NavBar';
import { lightTheme, darkTheme } from '../packages/theme';
import '../styles/sidebar.css';
import { DarkMode } from '../packages/lib/dark-mode';
import Switch from '../packages/components/Switch';

function MyApp({ Component, pageProps }: AppProps) {
  // Hooks
  const router = useRouter();

  // States
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Consts
  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DarkMode.Provider value={{ darkMode, setDarkMode }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {/* Google analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GTM_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GTM_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <Head>
            <link rel="shortcut icon" href="/favicon.png" />
            <title>Albert-Andrei Moldovanu</title>
            <meta charSet="UTF-8" />
            <meta
              name="description"
              content="This website is Albert's portfolio"
            />
            <meta name="keywords" content="HTML, CSS, JavaScript" />
            <meta name="author" content="Albert-Andrei Moldovanu" />
          </Head>

          <NavBar />
          <Component {...pageProps} />

          <Switch checked={darkMode} onChange={setDarkMode} />
        </ThemeProvider>
      </DarkMode.Provider>
    </>
  );
}

export default MyApp;
