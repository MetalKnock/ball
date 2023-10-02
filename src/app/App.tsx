import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { MainLayout } from '@/widgets/layouts/MainLayout';
import { PreloadLayout } from '@/widgets/layouts/PreloadLayout';
import { StoreProvider } from './providers/store';
import './styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <PreloadLayout>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <ToastContainer position='bottom-right' />
      </PreloadLayout>
    </StoreProvider>
  );
}
