import * as S from './styles';

import { Logo } from '../Logo';

export function Header() {
  return (
    <S.Container>
      <Logo />
      <S.InputSearchContainer>
        <input type="text" placeholder="Search for contact" />
      </S.InputSearchContainer>
    </S.Container>
  );
}
