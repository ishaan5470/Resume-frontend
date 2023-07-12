import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsApi } from "./appSlice";
 const store = configureStore({
  reducer: {
     [productsApi.reducerPath]: productsApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
export default store;