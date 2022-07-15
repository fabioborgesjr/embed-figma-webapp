import { createSlice } from "@reduxjs/toolkit";

export const joinSlice = createSlice({
  name: "join",
  initialState: {
    user: "",
  },
  reducers: {
    join: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { join } = joinSlice.actions;

export default joinSlice.reducer;
