import { DescriptionContainer, ProfileAvatar, ProfileName } from "./Profile.styles";

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <DescriptionContainer>
     <ProfileAvatar
        src={avatar}
        alt={username}
        width="256px"
      />
      <ProfileName>{username}</ProfileName>
      
    </DescriptionContainer>


    );
    
};
