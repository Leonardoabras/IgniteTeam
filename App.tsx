import React from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '@/config/theme';

import Groups from '@/presentational/screens/Groups';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
};

export default App;
