import { ReactNode, Context } from 'react';
import { ReactReduxContextValue } from 'react-redux';

interface ContextBridgeProps {
  children: ReactNode;
  Context: Context<ReactReduxContextValue>;
  render: (children: ReactNode) => ReactNode;
}

export default function ContextBridge({ children, Context, render }: ContextBridgeProps) {
  return (
    <Context.Consumer>
      {(value) => render(<Context.Provider value={value}>{children}</Context.Provider>)}
    </Context.Consumer>
  );
}
