// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
