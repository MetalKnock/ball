import { sessionLogin } from '@/entities/session/model/sessionServices';
import { LocalStorageKeys } from '@/shared/constants/localStorage';
import { RouterPath } from '@/shared/constants/router';
import { handleError } from '@/shared/lib/error';
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import Router from 'next/router';

const sessionListenerMiddleware = createListenerMiddleware();

sessionListenerMiddleware.startListening({
  matcher: isAnyOf(sessionLogin.fulfilled),
  effect: ({ payload }) => {
    try {
      localStorage.setItem(LocalStorageKeys.AUTH, JSON.stringify(payload));

      Router.push(RouterPath.BALL);
    } catch (error) {
      handleError(error, 'Error writing to local storage');
    }
  },
});

export const sessionMiddleware = sessionListenerMiddleware.middleware;
