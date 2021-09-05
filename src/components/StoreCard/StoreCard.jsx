import React from 'react';
import S from './StoreCard.module.scss';
import { Paper, Card, CardContent, CardHeader, Chip } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedStore, setSelectedStore } from '../../state/slices/stores.slice';

export default function StoreCard({ store: { store_name, relevantProducts, id } }) {

  const dispatch = useDispatch();

  function selectStore() {
    dispatch(setSelectedStore(id));
  }

  const selectedStore = useSelector(selectSelectedStore);

  const isSelected = selectedStore === id;

  return (
    <div className={`${isSelected ? S.selected : ''}`}>
      <Paper elevation={isSelected ? 3 : 0}>
        <Card onClick={selectStore}>
          <CardHeader title={store_name} />
          <CardContent>
            <div className={S.products}>
              {
                relevantProducts.map(product => (
                  <Chip key={product} label={product} size="small" variant="outlined" />
                ))
              }
            </div>
          </CardContent>
        </Card>
      </Paper>
    </div>
  );
}