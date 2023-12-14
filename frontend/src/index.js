import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { queryClient } from './utils/queryClient';
import { QueryClientProvider } from "react-query";
import { GlobalStyles } from './theme/globalStyles';
import { ReactQueryDevtools } from 'react-query/devtools';
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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);