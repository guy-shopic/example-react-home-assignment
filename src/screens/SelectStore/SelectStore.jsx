import React from 'react';
import S from './SelectStore.module.scss';
import { useStoreData } from './hooks';
import { useSelector } from 'react-redux';
import { selectAllStores, selectSelectedStore } from '../../state/slices/stores.slice';
import StoreCard from '../../components/StoreCard/StoreCard';

export default function SelectStore() {  
  useStoreData();
  
  const allStores = useSelector(selectAllStores);
  
  return (
    <div className={S.container}>
      <h1>SELECT STORE</h1>
      <div className={S.stores}>
        {
          allStores.map(store => (
            <StoreCard store={store} key={store.id} />
          ))
        }
      </div>
    </div>
  );
}