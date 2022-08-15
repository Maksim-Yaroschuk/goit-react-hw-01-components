import PropTypes from 'prop-types';
import {
  FriendsContainer
} from './FriendList.styles';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name}/>
        );
      })}
    </FriendsContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
