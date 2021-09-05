import React, { useState } from 'react';
import S from './MainNavigation.module.scss';
import { AppBar, IconButton, Drawer, Toolbar } from '@material-ui/core';
import {Menu, ChevronLeft} from '@material-ui/icons';
import NavMenu from '../NavMenu/NavMenu';
import { SCREENS, SCREEN_NAME_TO_COMPONENT, selectCurrentScreen } from '../../state/slices/navigation.slice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function MainNavigation() {  
  const currentScreen = useSelector(selectCurrentScreen);
  
  const CurrentScreen = SCREEN_NAME_TO_COMPONENT[currentScreen];

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentScreen])

  function toggleMenu(ev) {
    setMenuOpen(isOpen => !isOpen);
  }

  return (
    <div className={S.container}>
      <IconButton edge="start" onClick={toggleMenu} color="inherit" className={S.button}>
        <Menu></Menu>
      </IconButton>
      <Drawer anchor="left" open={menuOpen} variant="persistent">
        <IconButton edge="start" onClick={toggleMenu} color="inherit">
          <ChevronLeft></ChevronLeft>
        </IconButton>
        <NavMenu buttons={SCREENS} />
      </Drawer>
      <main className={S.currentScreen}>
        <CurrentScreen />
      </main>
    </div>
  );
}