import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_ERROR_MESSAGE } from '@/shared/constants/api';
import { jsonPlaceholderApiInstance } from '@/shared/lib/axios';
import { handleError } from '@/shared/lib/error';

const fetchTodos = createAsyncThunk('todo/fetchTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await jsonPlaceholderApiInstance.get('todos');

    if (response.status !== 200) {
      throw new Error('Failed to fetch todos. Please try again later.');
    }
    return response.data;
  } catch (error) {
    handleError(error, FETCH_ERROR_MESSAGE);
    return rejectWithValue(error instanceof Error ? error.message : FETCH_ERROR_MESSAGE);
  }
});

export { fetchTodos };
