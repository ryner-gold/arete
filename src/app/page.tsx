import Header from '@/components/Header/Header';
import MainContent from '@/components/MainContent/MainContent';
import { FlexBoxColumn } from '@/components/CustomisedMUIComponents/FlexBoxColumn';
import { FlexBox } from '@/components/CustomisedMUIComponents/FlexBox';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <FlexBoxColumn sx={{ minHeight: '100vh' }}>
      <Header />
      <Toolbar /> {/* This acts as a spacer */}
      <Box sx={{ py: 4 }}>
        <FlexBox
          component="main"
          sx={{ flexGrow: 1, justifyContent: 'center' }}
        >
          <MainContent />
        </FlexBox>
      </Box>
    </FlexBoxColumn>
  );
}
