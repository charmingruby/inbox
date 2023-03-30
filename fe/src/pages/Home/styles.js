import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 42px;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => (justifyContent)};
  align-items: center;
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary.main}
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
  }

  span {
    margin-right: 8px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main}
  }

  img {
    transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.2s ease-in;
  }

`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        text-transform: uppercase;
        padding: 4px;
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        border-radius: 4px;
        margin-left: 8px
      }
    }
    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }

  & + & {
    margin-top: 16px
  }
`;

export const ErrorContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items:center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  p {
      color: ${({ theme }) => theme.colors.gray[200]};
      text-align: center;
      margin-top: 8px;
  }

  strong {
      color: ${({ theme }) => theme.colors.primary.main};
  }
`;
