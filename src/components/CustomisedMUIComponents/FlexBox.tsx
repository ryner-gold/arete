'use client';

import { styled } from '@mui/material/styles';

export const FlexBox = styled('div')({
  name: 'FlexBox',
  display: 'flex',
});

export const FlexBoxColumn = styled(FlexBox)({
  flexDirection: 'column',
});
