import { configureStore } from "@reduxjs/toolkit";
import { clientsSlice, navigationSlice, storesSlice } from "./slices";



export default configureStore({
  reducer: {
    clients: clientsSlice,
    navigation: navigationSlice,
    stores: storesSlice
  }
})