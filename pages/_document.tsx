import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html className="scroll-smooth dark">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1b8520" />
        <meta name="title" content="REKT SPIN WHEEL" />
        <link rel="shortcut icon" href="logo.png" type="image/x-png" />
        <link rel="apple-touch-icon" href="logo.png" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <body className="no-scrollbar">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
