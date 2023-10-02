import { StageWithBridge } from '@/features/contextBridge';
import { ReactNode } from 'react';

interface PixiAppProps {
  children: ReactNode;
}

export default function PixiApp({ children }: PixiAppProps) {
  return (
    <StageWithBridge width={800} height={800}>
      {children}
    </StageWithBridge>
  );
}
