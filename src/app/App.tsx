import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import './styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position='bottom-right' />
    </>
  );
}
