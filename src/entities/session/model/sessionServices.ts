import { dummyApiInstance } from '@/shared/lib/axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_ERROR_MESSAGE } from '@/shared/constants/api';
import { handleError } from '@/shared/lib/error';
import { RequestSession } from './sessionTypes';

export const sessionLogin = createAsyncThunk(
  'auth/login',
  async (userData: RequestSession, { rejectWithValue }) => {
    try {
      const response = await dummyApiInstance.post('auth/login', userData);
      if (response.status !== 200) {
        throw new Error('Authentication failed. Please check your credentials.');
      }
      return response.data;
    } catch (error) {
      handleError(error, FETCH_ERROR_MESSAGE);
      return rejectWithValue(error instanceof Error ? error.message : FETCH_ERROR_MESSAGE);
    }
  },
);
