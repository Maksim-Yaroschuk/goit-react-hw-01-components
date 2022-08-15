import {
  FriendOnline,
  FriendAvatar,
  FriendName,
} from './FriendListItem.styles';
import { Box } from 'components/Box';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  <Box as="li">
    <FriendOnline isOnline={isOnline} />
    <FriendAvatar src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </Box>;
};
