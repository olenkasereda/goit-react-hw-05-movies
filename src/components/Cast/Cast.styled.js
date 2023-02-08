import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 16px;
  text-align: center;
  justify-content: center;
`;

export const Item = styled.li`
  border-radius: 4px;
`;

export const Image = styled.img`
  height: 375px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  color: orangered;
  margin-bottom: 5px;
  text-align: center;
`;

export const Character = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 5px;
  color: black;
  line-height: 30px;
  text-align: center;
`;

export const Notification = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
  color: orangered;
  line-height: 30px;
  text-align: center;
`;
