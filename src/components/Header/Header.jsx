// import React from 'react';
import React, { useState, useEffect } from 'react';

// svg
import IconCart from '../../assets/icons/cart.svg';
import IconFavorite from '../../assets/icons/favorite.svg';
import IconFact from '../../assets/icons/facts-soft.svg';

// mui components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';

import MenuIcon from '@mui/icons-material/Menu';


import { AddToCart } from '../AddToCart/AddToCart';

import { makeStyles } from '@mui/styles';
import { styles } from './Header.styles.js';

// hook
const useHeaderStyles = makeStyles(styles);

// Custom svg icons
// https://mui.com/material-ui/icons/#svgicon

export const Header = ({ title }) => {

  const classes = useHeaderStyles();

  const [ scrollTop, setScrollTop ] = useState(0);
  const [ scrolled, setScrolled ] = useState(0);

  const handleScroll = () => {
    const st = document.body.scrollTop || document.documentElement.scrollTop;
    setScrollTop(st);
    setScrolled(st > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

      <AppBar
        position="sticky"
        className={classes.root}
        color="white"
        sx={{
          // devider
          '& hr': {
            mx: 0.5,
          },
        }}
      >

        <Toolbar>

          {/* Title */}

          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{
              flexGrow: 1
            }}
          >
            {title}
          </Typography>

          {/* Buttons */}

          { scrolled ? <AddToCart /> : null}

          <IconButton>
            <SvgIcon>
              <IconFavorite />
            </SvgIcon>
          </IconButton>

          <IconButton>
            <SvgIcon>
              <IconFact />
            </SvgIcon>
          </IconButton>

          <Divider orientation="vertical" flexItem />

            <IconButton>
              <Badge badgeContent={1} color="primary">
                <SvgIcon>
                  <IconCart />
                </SvgIcon>
              </Badge>
            </IconButton>

        </Toolbar>

      </AppBar>
  );
};
