import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0A192F" />
        <meta name="color-scheme" content="dark" />
      </Head>

      <body style={{ backgroundColor: "#0A192F" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
