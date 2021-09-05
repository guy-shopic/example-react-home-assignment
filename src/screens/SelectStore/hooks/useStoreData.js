import { useEffect } from "react";
import { GET } from '../../../services/backend.service';
import { useDispatch } from 'react-redux';
import { setAllStores } from '../../../state/slices/stores.slice';

export default function useStoreData(){
  
  const dispatch = useDispatch();

  useEffect(() => {
    GET('https://run.mocky.io/v3/96e24d28-2342-4789-be1f-3a3a43dcbb56').then(data => {
      dispatch(setAllStores(data));      
    });
  }, [])
}