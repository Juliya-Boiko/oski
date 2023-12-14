import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    color: #333333;
    background-color: #F6F5F4;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    line-height: 1;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    
  }
`;