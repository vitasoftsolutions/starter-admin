import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReducer from "./services/auth/authSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
