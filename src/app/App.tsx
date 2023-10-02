import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { MainLayout } from '@/widgets/layouts/MainLayout';
import { StoreProvider } from './providers/store';
import './styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      <ToastContainer position='bottom-right' />
    </StoreProvider>
  );
}
