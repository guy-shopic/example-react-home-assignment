import { useEffect } from "react";
import { GET } from '../../../services/backend.service';
import { useDispatch } from 'react-redux';
import { setAllClients } from "../../../state/slices/clients.slice";

export default function useClientData(){
  
  const dispatch = useDispatch();

  useEffect(() => {
    GET('https://run.mocky.io/v3/4bca4d7e-b44f-4356-9145-af672e18a0e4').then(data => {
      dispatch(setAllClients(data));      
    });
  }, [])
}