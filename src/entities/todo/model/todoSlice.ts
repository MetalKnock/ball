import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo, Todos } from './todoTypes';
import { fetchTodos } from './todoServices';

interface TodoSliceState {
  isLoading: boolean;
  todos: Todos;
  currentTodo: Todo | null;
}

const initialState: TodoSliceState = {
  isLoading: false,
  todos: [],
  currentTodo: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setNewCurrentTodo: (state) => {
      const indexNewCurrentTodo = Math.floor(Math.random() * state.todos.length);
      state.currentTodo = state.todos[indexNewCurrentTodo];
      state.todos = state.todos.filter((_, index) => index !== indexNewCurrentTodo);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.isLoading = false;
        const indexNewCurrentTodo = Math.floor(Math.random() * state.todos.length);
        state.currentTodo = action.payload[indexNewCurrentTodo];
        state.todos = action.payload.filter((_, index) => index !== indexNewCurrentTodo);
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setNewCurrentTodo } = todoSlice.actions;
