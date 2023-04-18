import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { useErrors } from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';

import * as S from './styles';

import { FormGroup } from '../FormGroup';

import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

import isEmailValid from '../../utils/isEmailValid';
import { formatPhone } from '../../utils/formatPhone';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);

  const {
    setError,
    removeError,
    getErrorMessageByFieldname,
    errors,
  } = useErrors();

  const isFormValid = name && errors.length === 0;

  const handleNameChange = (event) => {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Name is required.' });
    } else {
      removeError('name');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Invalid e-mail.' });
    } else {
      removeError('email');
    }
  };

  const handlePhoneChange = (event) => {
    setPhone(formatPhone(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    async function loadCategories() {
      const categoriesList = await CategoriesService.listCategories();
      setCategories(categoriesList);
    }

    loadCategories();
  }, []);

  return (
    <S.Form meth action="/" onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldname('name')}>
        <Input
          type="text"
          placeholder="Name*"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldname('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldname('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldname('email')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">No category</option>
          {
            categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          }
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
