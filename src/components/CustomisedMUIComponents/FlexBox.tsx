'use client';

import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

export const FlexBox = styled(Box)<BoxProps>(() => ({
  display: 'flex',
}));
