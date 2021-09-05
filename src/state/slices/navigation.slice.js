import { createSlice } from "@reduxjs/toolkit";
import SelectClient from '../../screens/SelectClient/SelectClient';
import SelectStore from '../../screens/SelectStore/SelectStore';
import Summary from '../../screens/Summary/Summary';

export const SCREENS = [{
  title: 'Select Client',
  screen: 'selectClient',
  enabled: () => true
},{
  title: 'Select Store',
  screen: 'selectStore',
  enabled: () => true
},{
  title: 'Summary',
  screen: 'summary',
  enabled: (state) => {
    
    console.log('client - ' + !!state.clients.selectedClient);
    console.log('store  - ' + !!state.stores.selectedStore);
    console.log('- - - - - - - - - - -');
    
    return !!state.clients.selectedClient && !!state.stores.selectedStore
  }
}];

export const SCREEN_NAME_TO_COMPONENT = {
  selectClient: SelectClient,
  selectStore: SelectStore,
  summary: Summary
}

export const selectCurrentScreen = (state) => {
  return state.navigation;
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: SCREENS[0].screen,
  reducers: {
    setCurrentScreen: (_, { payload }) => payload
  }
});

export const { setCurrentScreen } = navigationSlice.actions;
export default navigationSlice.reducer;
