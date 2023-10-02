import { JSX, useEffect } from 'react';
import { LocalStorageKeys } from '@/shared/constants/localStorage';
import { RouterPath } from '@/shared/constants/router';
import { NextComponentType } from 'next';
import { useRouter } from 'next/router';

function withAuth<T extends JSX.IntrinsicAttributes>(Component: NextComponentType<T>) {
  const Auth = (props: T) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = localStorage.getItem(LocalStorageKeys.AUTH);

      if (!isAuthenticated) {
        router.push(RouterPath.LOGIN);
      }
    }, [router]);

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}

export default withAuth;
