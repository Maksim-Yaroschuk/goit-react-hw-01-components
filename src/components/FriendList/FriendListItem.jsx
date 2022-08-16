import PropTypes from 'prop-types';
import {
  FriendOnline,
  FriendAvatar,
  FriendName,
  FriendItem,
} from './FriendListItem.styles';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <FriendItem key={id}>
      <FriendOnline isOnline={isOnline} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
