import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from '@/config/theme';

import Groups from '@/presentational/screens/Groups';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={'light-content'} backgroundColor='transparent' translucent />
      <Groups />
    </ThemeProvider>
  );
};

export default App;
