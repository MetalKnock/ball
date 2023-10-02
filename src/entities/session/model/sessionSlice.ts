import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { sessionLogin } from './sessionServices';
import { SessionData } from './sessionTypes';

interface SessionSliceState {
  isLoading: boolean;
  isAuthorized: boolean;
  sessionData: SessionData | null;
}

const initialState: SessionSliceState = {
  isLoading: false,
  isAuthorized: false,
  sessionData: null,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sessionLogin.fulfilled.type, (state, action: PayloadAction<SessionData>) => {
        state.isLoading = false;
        state.isAuthorized = true;
        state.sessionData = action.payload;
      })
      .addCase(sessionLogin.pending.type, (state) => {
        state.isLoading = true;
      })
      .addCase(sessionLogin.rejected.type, (state) => {
        state.isLoading = false;
        state.isAuthorized = false;
        state.sessionData = null;
      });
  },
});
