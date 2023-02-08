import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 15px;
  color: orangered;
`;

export const MovieItem = styled.li`
  display: flex;
  margin-top: 10px;
  padding: 2px;
  font-size: 23px;
  font-weight: 400;
  font-family: 'Segoe UI';

  :hover,
  :focus {
    color: orangered;
  }
`;
