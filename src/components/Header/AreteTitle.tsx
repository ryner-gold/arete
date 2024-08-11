'use client';

import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontFamily: '"Trajan Pro", "Times New Roman", serif',
  fontWeight: 700,
  color: theme.palette.primary.main,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  '&::first-letter': {
    fontSize: '1.2em',
  },
}));

export default function AreteTitle() {
  return <LogoTypography variant="h4">Arete</LogoTypography>;
}
