import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <meta name="description" content="Portfolio of Shivakumar Kokkula" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}