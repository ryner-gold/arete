import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ScrollToTop from '@/components/Header/ScrollToTop/ScrollToTop';
import { FlexBox } from '@/components/CustomisedMUIComponents/FlexBox';

export default function Header(): React.ReactElement {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <FlexBox sx={{ width: '100%', justifyContent: 'center' }}>
            <Typography variant="h6" component="div">
              Arete
            </Typography>
          </FlexBox>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollToTop />
    </React.Fragment>
  );
}
