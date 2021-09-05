import { createSlice } from "@reduxjs/toolkit";
import { selectSelectedClient } from "./clients.slice";

const initialState = {
  allStores: [],
  selectedStore: null,
};

function pickRelevantProducts(store, requiredProducts) {
  const relevantProducts = store.available_products.filter((available) =>
    requiredProducts.includes(available)
  );

  return Object.assign({}, store, {
    relevantProducts,
  });
}

const getRelevantStores = (stores, requiredProducts) =>
  requiredProducts &&
  stores
    .filter((store) =>
      store.available_products.some((availableProduct) =>
        requiredProducts.includes(availableProduct)
      )
    )
    .map((store) => pickRelevantProducts(store, requiredProducts));

// SELECTORS
export const selectAllStores = (state) =>
  getRelevantStores(
    state.stores.allStores,
    state.clients.selectedClient ? selectSelectedClient(state).products : []
  );

export const selectSelectedStore = (state) => state.stores.selectedStore;

// REDUCERS
const setAllStoresReducer = (state, { payload }) => ({
  ...state,
  allStores: payload,
});

const setSelectedStoreReducer = (state, { payload }) => ({
  ...state,
  selectedStore: payload,
});

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    setAllStores: setAllStoresReducer,
    setSelectedStore: setSelectedStoreReducer,
  },
});

export const { setAllStores, setSelectedStore } = storesSlice.actions;
export default storesSlice.reducer;
