'use client';

import { styled } from '@mui/material/styles';
import { FlexBox } from '@/components/CustomisedMUIComponents/FlexBox';
import { BoxProps } from '@mui/material/Box';

export const FlexBoxColumn = styled(FlexBox)<BoxProps>(() => ({
  flexDirection: 'column',
}));
