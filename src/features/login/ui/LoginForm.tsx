import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { sessionLogin } from '@/entities/session/model/sessionServices';
import Image from 'next/image';
import loader from '@/shared/assets/loader.svg';
import styles from './LoginForm.module.scss';
import { LoginFormSchema } from '../model/loginTypes';
import { ErrorMessages } from '../lib/loginContants';

interface LoginFormProps {
  className?: string;
}

export default function LoginForm({ className = '' }: LoginFormProps) {
  const { isLoading } = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginFormSchema>();

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    dispatch(sessionLogin(data));
  };

  return (
    <form className={`${styles.loginForm} ${className}`} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Sign in</h1>
      <div className={styles.inputWrapper}>
        <Input
          autoFocus
          type='text'
          placeholder='Enter username'
          label='Username*'
          {...register('username', {
            required: ErrorMessages.usernameRequired,
            minLength: { value: 5, message: ErrorMessages.usernameMinLength },
          })}
        />
        {errors.username && <p className={styles.error}>{errors.username?.message}</p>}
      </div>
      <div className={styles.inputWrapper}>
        <Input
          type='password'
          placeholder='Enter password'
          label='Password*'
          {...register('password', {
            required: ErrorMessages.passwordRequired,
            minLength: { value: 5, message: ErrorMessages.passwordMinLength },
          })}
        />
        {errors.password && <p className={styles.error}>{errors.password?.message}</p>}
      </div>
      <Button className={styles.button} type='submit'>
        {!isLoading ? 'Login' : <Image className={styles.loader} src={loader} alt='loader' />}
      </Button>
    </form>
  );
}
