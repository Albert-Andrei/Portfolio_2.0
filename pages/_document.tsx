import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GTM_ID } from '@lib/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <>
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styles } = this.props;
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="This website is Albert's portfolio"
          />
          <meta name="keywords" content="HTML, CSS, JavaScript" />
          <meta name="author" content="Albert-Andrei Moldovanu" />

          <meta name="format-detection" content="telephone=no" />
          <meta
            name="description"
            content="Find tonsvis af dygtige mennesker til dine opgaver i eller udenfor hjemmet. Alt fra handyhjælp til hundeluftning - bare shout."
          />
          <meta name="author" content="AAMoldovanu®" />
          <meta name="copyright" content="© 2021 Albert-Anderi Moldovanu" />
          <meta
            property="og:title"
            content="Få fixet dine to do's eller tjen penge på dine talenter"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Find tonsvis af dygtige mennesker til dine opgaver i eller udenfor hjemmet. Alt fra handyhjælp til hundeluftning - bare shout."
          />
          <meta property="og:url" content="https://aamoldovanu.com/" />
          <meta property="og:site_name" content="AAMoldovanu®" />
          {styles}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="preload"
          ></link>
        </Head>
        <body>
          {/* Google Tag Manager */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
