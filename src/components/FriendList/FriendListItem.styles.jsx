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
