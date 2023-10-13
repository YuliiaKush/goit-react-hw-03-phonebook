import styled from 'styled-components';

export const ListItem = styled.li``;

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ListItemInfo = styled.span``;

export const ListItemButton = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d32f2f;
  }
`;