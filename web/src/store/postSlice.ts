import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    clearPosts: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addPost, clearPosts } = postSlice.actions;
export default postSlice.reducer;
