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
    selectSelectedClient(state).products
  );

export function selectSelectedStore(state) {
  // debugger;

  return state.stores.selectedStore;
}

// REDUCERS
const setAllStoresReducer = (state, { payload }) => ({
  ...state,
  allStores: payload,
});

function setSelectedStoreReducer(state, { payload }) {
  debugger;

  return {
    ...state,
    selectedStore: payload,
  };
}

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
