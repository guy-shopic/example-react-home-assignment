import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  allClients: [],
  selectedClient: null
};

// SELECTORS 
export const selectAllActiveClients = (state) => {
  return state.clients.allClients.filter(client => client.is_active);
}
export const selectSelectedClient = (state) => {
  return state.clients.selectedClient;
}

// REDUCERS
const setAllClientsReducer = (state, { payload }) => {
  return {
    ...state,
    allClients: payload
  }
}

const setSelectedClientReducer = (state, { payload: clientId }) => {

  const selectedClient = state.allClients.filter(client => client.id === clientId)[0];
  
  return {
    ...state,
    selectedClient,
  }
}

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setAllClients: setAllClientsReducer,
    setSelectedClient: setSelectedClientReducer
  }
})

export const { setAllClients, setSelectedClient } = clientsSlice.actions;
export default clientsSlice.reducer;