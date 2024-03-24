import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import testSlice from "./features/testSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    test: testSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
