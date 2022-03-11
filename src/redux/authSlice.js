import { createSlice } from "@reduxjs/toolkit";
import { AUTH } from "share/constants/actionTypes";

const initialState = { authData: null };

export default createSlice({
  name: AUTH,
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      state.authData = action?.payload;
    },
    logout: (state, action) => {
      localStorage.clear();
      state.authData = null;
    },
  },
});
