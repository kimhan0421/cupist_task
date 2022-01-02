import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property='og:title' content='멋쟁이 사자처럼 at 명지대 자연' />
          <meta property='og:type' content='website' />
          <meta property='og:description' content='Glam' />
          <meta property='og:locale' content='ko_KR' />
          <meta property='og:locale:alternate' content='en_US' />
        </Head>
        <body>
          <Main />
          <div id='modal' />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
