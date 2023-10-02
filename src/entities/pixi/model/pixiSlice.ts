import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Resource, Texture } from 'pixi.js';

interface PixiSliceState {
  assets: {
    [assetName: string]: Texture<Resource> | null;
  };
}

const initialState: PixiSliceState = {
  assets: {},
};

export const pixiSlice = createSlice({
  name: 'pixi',
  initialState,
  reducers: {
    setTexture: (state, action: PayloadAction<{ name: string; texture: Texture<Resource> }>) => {
      const { name, texture } = action.payload;
      state.assets[name] = texture;
    },
  },
});

export const { setTexture } = pixiSlice.actions;
