import Header from '@/components/Header/Header';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <>
      <Header />
      <Box component="main" sx={{ p: 3 }}>
        {/* Your main content goes here */}
        <h1>Welcome to Arete</h1>
        <p>To live to one&apos;is fullest potential</p>
        {/* Add more content to make the page scrollable */}
        {[...Array(50)].map((_, i) => (
          <p key={i}>This is paragraph {i + 1}</p>
        ))}
      </Box>
    </>
  );
}
