import { Link } from 'react-router-dom';
import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function Home() {
  return (
    <S.Container>
      <S.InputSearchContainer>
        <input type="text" placeholder="Search by name..." />
      </S.InputSearchContainer>

      <S.Header>
        <strong>3 contacts</strong>
        <Link to="/new">New contact</Link>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="contact-name">
              <strong>Gustavo Dias</strong>
              <small>instagram</small>
            </div>
            <span>gustavo@email.com</span>
            <span>(32) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      </S.ListContainer>

    </S.Container>
  );
}
