import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
    setSignOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
