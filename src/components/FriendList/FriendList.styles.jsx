import styled from 'styled-components';

export const FriendsContainer = styled.ul`
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  flex-direction: column;
  display: flex;
  width: 400px;
  padding-left: 0px;
`;

export const FriendListItem = styled.li`
  margin-top: ${p => p.theme.space[3]}px;
  list-style-type: none;
  display: inline-flex;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20);
`;
