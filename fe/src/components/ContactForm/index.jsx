import PropTypes from 'prop-types';

import * as S from './styles';

import { FormGroup } from '../FormGroup';

import Input from '../ui/Input';
import Select from '../ui/Select';
import Button from '../ui/Button';

export function ContactForm({ buttonLabel }) {
  return (
    <S.Form>
      <FormGroup>
        <Input type="text" placeholder="Name" />
      </FormGroup>

      <FormGroup
        error="Invalid e-mail format"
      >
        <Input type="text" placeholder="E-mail" error />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Phone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
