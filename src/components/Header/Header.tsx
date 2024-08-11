import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { FlexBox } from '@/components/CustomisedMUIComponents/FlexBox';
import AreteTitle from '@/components/Header/AreteTitle';

export default function Header() {
  return (
    <FlexBox>
      <AppBar position="fixed">
        <FlexBox sx={{ justifyContent: 'center' }}>
          <Toolbar>
            <AreteTitle />
          </Toolbar>
        </FlexBox>
      </AppBar>
    </FlexBox>
  );
}
