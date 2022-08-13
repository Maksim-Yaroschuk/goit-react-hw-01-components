import PropTypes from "prop-types"
import { FriendsContainer, FriendsItem, FriendOnline, FriendAvatar, FriendName } from "./FriendList.styles"

export const FriendList = ({ friends }) => {
    return (
        <FriendsContainer>
            {friends.map((friend) => {
                return <FriendsItem key={friend.id}>
                    <FriendOnline isOnline={friend.isOnline}/>
                    <FriendAvatar
                      src={friend.avatar}
                      alt="User avatar"
                      width="48"  
                    />
                    <FriendName>{friend.name}</FriendName>
                </FriendsItem>
            })}
        </FriendsContainer>
    )

}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};