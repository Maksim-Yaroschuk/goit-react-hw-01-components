import {FriendsContainer, FriendsItem, FriendStats, FriendAvatar, FriendName} from "./FriendList.styles"

export const FriendList = ({ friends }) => {
    return (
        <FriendsContainer>
            {friends.map((friend) => {
                return <FriendsItem key={friend.id}>
                    <FriendStats>{friend.isOnline}</FriendStats>
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