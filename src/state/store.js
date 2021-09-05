import { configureStore } from "@reduxjs/toolkit";
import { navigationSlice } from "./slices";



export default configureStore({
  reducer: {
    navigation: navigationSlice,
  }
})