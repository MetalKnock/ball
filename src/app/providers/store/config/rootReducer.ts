import { combineReducers } from '@reduxjs/toolkit';
import { sessionSlice } from '@/entities/session/';
import { todoSlice } from '@/entities/todo/';
import { pixiSlice } from '@/entities/pixi/';

export const rootReducer = combineReducers({
  [todoSlice.name]: todoSlice.reducer,
  [sessionSlice.name]: sessionSlice.reducer,
  [pixiSlice.name]: pixiSlice.reducer,
});
