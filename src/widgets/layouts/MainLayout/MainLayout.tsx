import { ReactNode } from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <div className={`${styles.mainLayout} ${className}`}>
      <main>
        <div className='container'>{children}</div>
      </main>
    </div>
  );
}
