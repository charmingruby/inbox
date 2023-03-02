import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import defaultTheme from '../../assets/themes/default';
import { GlobalStyle } from '../../assets/styles/global';

import * as S from './styles';

import { Header } from '../Header';

import Routes from '../../Routes';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <S.Container>
          <Header />
          <Routes />
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}
