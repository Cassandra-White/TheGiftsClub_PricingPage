import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import PricingPage from './pages/PricingPage';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <PricingPage />
    </ThemeProvider>
  );
};

export default App;
