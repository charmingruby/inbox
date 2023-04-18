/* eslint-disable no-nested-ternary */
/* eslit-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/icons/sad.svg';
import emptyBox from '../../assets/images/icons/empty-box.svg';
import magnifierQuestion from '../../assets/images/icons/magnifier-question.svg';

import Button from '../../components/ui/Button';
import { Loader } from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => {
    return contacts.filter(
      (contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, contacts]);

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(false);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTryAgain = () => {
    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

      {
        contacts.length > 0
        && (
          <S.InputSearchContainer>
            <input value={searchTerm} onChange={handleChangeSearchTerm} type="text" placeholder="Search by name..." />
          </S.InputSearchContainer>
        )
      }

      <S.Header
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              contacts.length > 0
                ? 'space-between'
                : 'center'
            )

        }
      >
        {(!hasError && contacts.length > 0)
          && (
            <strong>
              {filteredContacts.length}
              {' '}
              {
                filteredContacts.length === 1 ? 'contact' : 'contacts'
              }
            </strong>
          )}
        <Link to="/new">New contact</Link>
      </S.Header>

      {
        hasError && (
          <S.ErrorContainer>
            <img src={sad} alt="Sad Icon" />
            <div className="details">
              <strong>There was an error getting your contacts!</strong>
              <Button onClick={handleTryAgain}>Try again</Button>
            </div>
          </S.ErrorContainer>
        )
      }

      {!hasError && (
        <>
          {
            contacts.length === 0 && !isLoading && (
              <S.EmptyListContainer>
                <img src={emptyBox} alt="Empty Box Illustration" />
                <p>
                  You still don&apos;t have any contact yet!
                  Click the
                  {' '}
                  <strong>&quot;New Contact&quot;</strong>
                  {' '}
                  button above to register the first.
                </p>
              </S.EmptyListContainer>
            )
          }

          {
            contacts.length > 0 && filteredContacts.length < 1 && (
              <S.SearchNotFoundContainer>
                <img src={magnifierQuestion} alt="Magnifier Question Icon" />

                <span>
                  No results found for
                  &quot;
                  {searchTerm}
                  &quot;
                </span>
              </S.SearchNotFoundContainer>
            )
          }

          {
            filteredContacts.length > 0
            && (
              <S.ListHeader orderBy={orderBy}>
                <button type="button" onClick={handleToggleOrderBy}>
                  <span>Name</span>
                  <img src={arrow} alt="Arrow" />
                </button>
              </S.ListHeader>
            )
          }

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
        </>
      )}
    </S.Container>
  );
}
