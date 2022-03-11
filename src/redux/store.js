import { configureStore } from "@reduxjs/toolkit";
import authSlice from "redux/authSlice";
import { cryptoApi } from "services/cryptoApi";
import { cryptoNewsApi } from "services/cryptoNewsApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    auth: authSlice.reducer
  },
});
