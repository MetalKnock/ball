import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  leftSlot?: ReactNode;
  label?: string | null;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', leftSlot = null, label = null, ...props }, ref) => {
    const input = (
      <div className={`${styles.inputWrapper} ${className}`}>
        {leftSlot}
        <input className={styles.input} {...props} ref={ref} />
      </div>
    );

    if (label) {
      return (
        <div>
          <p className={styles.label}>{label}</p>
          {input}
        </div>
      );
    }

    return input;
  },
);

export default Input;
