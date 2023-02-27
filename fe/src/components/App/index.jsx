import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/themes/default';
import { GlobalStyle } from '../../assets/styles/global';

import * as S from './styles';

import { Header } from '../Header';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <S.Container>
        <Header />
      </S.Container>
    </ThemeProvider>
  );
}
