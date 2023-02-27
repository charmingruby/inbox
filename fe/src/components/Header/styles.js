import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    background-color: #ffffff;
    border-radius: 25px;
    border: none;
    height: 50px;
    box-shadow:0px 4px 10px rgba(0,0,0,0.04);
    padding: 0 16px;
    outline: 0;

    &::placeholder {
      color: #bcbcbc
    }
  }
`;
