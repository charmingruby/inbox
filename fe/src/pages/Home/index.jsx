import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, contacts]);

  useEffect(() => {
    fetch(`http://localhost:3333/contacts?orderBy=${orderBy}`, {
      method: 'GET',
      headers: new Headers({
        'X-App-ID': '123',
      }),
    })
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => console.log(error));
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.Container>
      <S.InputSearchContainer>
        <input value={searchTerm} onChange={handleChangeSearchTerm} type="text" placeholder="Search by name..." />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {filteredContacts.length}
          {' '}
          {
            filteredContacts.length === 1 ? 'contact' : 'contacts'
          }
        </strong>
        <Link to="/new">New contact</Link>
      </S.Header>

      { filteredContacts.length > 0
      && (
      <S.ListHeader orderBy={orderBy}>
        <button type="button" onClick={handleToggleOrderBy}>
          <span>Name</span>
          <img src={arrow} alt="Arrow" />
        </button>
      </S.ListHeader>
      )}

      {
            filteredContacts.map((contact) => (
              <S.Card key={contact.id}>
                <div className="info">
                  <div className="contact-name">
                    <strong>{contact.name}</strong>

                    {
                      contact.category_name
                      && (<small>{contact.category_name}</small>)
                    }

                  </div>
                  <span>{contact.email}</span>
                  <span>{contact.phone}</span>
                </div>

                <div className="actions">
                  <Link to={`/edit/${contact.id}`}>
                    <img src={edit} alt="Edit" />
                  </Link>
                  <button type="button">
                    <img src={trash} alt="Delete" />
                  </button>
                </div>
              </S.Card>
            ))
          }
    </S.Container>
  );
}
