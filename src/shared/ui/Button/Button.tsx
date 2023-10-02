import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
}

export default function Button({
  children,
  className = '',
  leftSlot = null,
  rightSlot = null,
  ...props
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${className} `} type='button' {...props}>
      {leftSlot}
      {children}
      {rightSlot}
    </button>
  );
}
