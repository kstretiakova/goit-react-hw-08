import { createSlice } from "@reduxjs/toolkit";

import {
  getMeThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isError = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isRefreshing = false;
        state.isError = false;
      })
      .addCase(getMeThunk.pending, (state) => {
        state.isRefreshing = true;
        state.isError = false;
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = false;
      });
  },
});

export const authReducer = slice.reducer;