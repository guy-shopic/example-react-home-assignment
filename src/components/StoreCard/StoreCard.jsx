import React from 'react';
import S from './StoreCard.module.scss';
import { Card, CardContent, CardHeader, Chip } from '@material-ui/core';

export default function StoreCard({ title, products }) {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <div className={S.products}>
          {
            products.map(product => (
              <Chip key={product} label={product} size="small" variant="outlined" />
            ))
          }
        </div>
      </CardContent>
    </Card>
  );
}