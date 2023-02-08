import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: inline-flex;
  padding: 5px 5px;
  color: orangered;
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 10px;
  border-radius: 4px;

  border: none;

  :hover {
    color: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(105, 105, 105);
`;

export const Image = styled.img`
  width: 400px;
  border-radius: 4px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  margin-left: 15px;
`;

export const MovieTitle = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
  color: orangered;
`;

export const Criteria = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: orangered;
  margin-bottom: 10px;
`;

export const Details = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  color: black;
  line-height: 30px;
`;

export const Average = styled.span`
  display: inline-block;
  color: white;
  background-color: #2f9e99;
  border-radius: 5px;
  padding: 1px 10px;
  font-weight: 500;
  font-size: 20px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 25px;
  padding: 8px 18px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  :hover,
  :focus {
    color: orangered;
  }

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  text-align: center;
`;
