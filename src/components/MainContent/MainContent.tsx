import React from 'react';
import Typography from '@mui/material/Typography';
import { FlexBoxColumn } from '@/components/CustomisedMUIComponents/FlexBoxColumn';
import { Card, CardContent } from '@mui/material';

export default function MainContent(): React.ReactElement {
  return (
    <FlexBoxColumn
      sx={{
        flexGrow: 1,
        maxWidth: {
          xs: '100%',
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
        },
        px: { xs: 2, sm: 3, md: 4 },
        gap: 3, // Add gap between flex items
      }}
    >
      <Card variant="outlined" elevation={2}>
        <CardContent>
          <Typography variant="h4" component="h1">
            Welcome to Our Website
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
          </Typography>
          {/* More content here */}
        </CardContent>
      </Card>
    </FlexBoxColumn>
  );
}
