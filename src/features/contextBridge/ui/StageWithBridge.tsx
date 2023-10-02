import { ReactNode, ComponentProps } from 'react';
import { Stage } from '@pixi/react';
import { ReactReduxContext } from 'react-redux';
import ContextBridge from './ContextBridge';

interface StageWithBridgeProps extends ComponentProps<typeof Stage> {
  children: ReactNode;
}

export default function StageWithBridge({ children, ...props }: StageWithBridgeProps) {
  return (
    <ContextBridge
      Context={ReactReduxContext}
      render={(children: ReactNode) => <Stage {...props}>{children}</Stage>}
    >
      {children}
    </ContextBridge>
  );
}
