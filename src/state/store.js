import { configureStore } from "@reduxjs/toolkit";
import { clientsSlice, navigationSlice } from "./slices";



export default configureStore({
  reducer: {
    navigation: navigationSlice,
    clients: clientsSlice
  }
})