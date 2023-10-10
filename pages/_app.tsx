import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { App } from 'konsta/react';
import NextNProgress from 'nextjs-progressbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <NextNProgress
        color="#d1017d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </App>
  );
}

export default MyApp;
