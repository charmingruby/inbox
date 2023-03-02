import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
  }

  body {
    background-color:${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[900]}
  }

  button, input, a, text-area, select {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
