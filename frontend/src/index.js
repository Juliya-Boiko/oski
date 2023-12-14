import React from 'react';
import ReactDOM from 'react-dom/client';
import { queryClient } from './utils/queryClient';
import { QueryClientProvider } from "react-query";
import { GlobalStyles } from './theme/globalStyles';
import { MainRouter } from './router';
import { ThemeProvider } from "styled-components";
import { theme } from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);