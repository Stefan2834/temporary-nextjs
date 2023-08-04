import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'
import Layout from '@/components/layout';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}