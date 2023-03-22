import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import { Loader } from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, contacts]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy);

        setContacts(contactsList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadContacts();
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.Container>
      <Loader isLoading={isLoading} />
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
