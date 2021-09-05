import React from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentScreen } from '../../state/slices/navigation.slice';

export default function NavMenu({ buttons }) {

  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  return (
    <List>
      {
        buttons.map(navButton => (
          <ListItem key={navButton.screen} button disabled={!navButton.enabled(state)} onClick={() => dispatch(setCurrentScreen(navButton.screen))}>
            <ListItemText>{navButton.title}</ListItemText>
          </ListItem>
        ))
      }
    </List>
  );
}