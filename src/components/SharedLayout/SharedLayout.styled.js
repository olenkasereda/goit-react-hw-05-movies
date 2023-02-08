import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 30px 20px 30px;

  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid rgb(105, 105, 105);
`;

export const StyledLink = styled(NavLink)`
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 24px;

  :hover,
  :focus {
    color: orangered;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;
