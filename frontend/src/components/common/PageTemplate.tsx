import { ReactNode } from 'react';
import { Box, Typography }from '@mui/material';

interface PageTemplateProps {
  title: string;
  children: ReactNode;
}

const PageTemplate = ({ title, children }: PageTemplateProps) => {
  return (

    <Box sx={{ maxWidth: 800, width: '100%', padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Box>
        {children}
        </Box>
    </Box>
  );
};

export default PageTemplate;
