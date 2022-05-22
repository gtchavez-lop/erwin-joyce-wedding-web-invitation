import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ overflowX: 'hidden' }} className="bg-[#F0EDC2]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
