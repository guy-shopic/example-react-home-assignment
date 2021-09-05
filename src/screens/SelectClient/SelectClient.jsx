import React from 'react';
import S from './SelectClient.module.scss';
import useClientData from './hooks/useClientData';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllActiveClients, selectSelectedClient, setSelectedClient } from '../../state/slices/clients.slice';
import { FormControl, InputLabel, Select, MenuItem, Chip } from '@material-ui/core';

export default function SelectClient() {
  useClientData();

  const dispatch = useDispatch();

  const activeClients = useSelector(selectAllActiveClients);
  
  const selectedClient = useSelector(selectSelectedClient);
  
  function clientSelected(ev) {
    
    dispatch(setSelectedClient(ev.target.value));

  }
  
  return (
    <div className={S.container}>
      <h1>select client</h1>
      <FormControl>
        <InputLabel>Select Client</InputLabel>
        <Select onChange={clientSelected} value={selectedClient ? selectedClient.id : null}>
          {
            activeClients.map(client => (
              <MenuItem key={client.id} value={client.id}>{`${client.first_name} ${client.last_name}`}</MenuItem>
            ))
          }
        </Select>
        <div className={S.products}>
          {
            selectedClient && selectedClient.products.map(product => (
              <Chip key={product} label={product} color="primaryr" variant="outlined" />
            ))
          }
        </div>
      </FormControl>
    </div>
  );
}