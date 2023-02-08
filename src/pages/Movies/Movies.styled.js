import styled from '@emotion/styled';
import { FcSearch } from 'react-icons/fc';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
     opacity: 1;
`;

export const SearchIcon = styled(FcSearch)`
  width: 40px;
  height: 40px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 30px;
  border-radius: 4px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Item = styled.li`
  display: flex;
  margin-top: 10px;
  padding: 2px;
  font-size: 23px;
  font-weight: 400;

  :hover,
  :focus {
    color: orangered;
  }
`;
