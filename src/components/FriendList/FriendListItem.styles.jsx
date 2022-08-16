import styled from 'styled-components';

export const FriendOnline = styled.span`
  padding-left: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;
  background-color: ${p => (p.isOnline ? 'green' : 'tomato')};
  border-radius: ${p => p.theme.radii.round};
  width: 32px;
`;
export const FriendAvatar = styled.img`
  border-radius: ${p => p.theme.radii.lg};
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
`;
export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-left: ${p => p.theme.space[4]}px;
`;

export const FriendItem = styled.li`
  margin-top: ${p => p.theme.space[3]}px;
  list-style-type: none;
  display: inline-flex;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20);
`;