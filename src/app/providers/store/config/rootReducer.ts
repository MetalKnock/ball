import { combineReducers } from '@reduxjs/toolkit';
import { sessionSlice } from '@/entities/session/model/sessionSlice';

export const rootReducer = combineReducers({
  [sessionSlice.name]: sessionSlice.reducer,
});
