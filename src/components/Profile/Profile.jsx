import {ProfileContainer, DescriptionContainer, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsEl, ProfileStatsLabel, ProfileStatsQuantity } from "./Profile.styles";
import { Box } from "components/Box";

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <Box
      marginTop="32px"
      marginBottom="32px"
      width="400px"
      border="1px solid"
      borderRadius="16px"
      >
      <DescriptionContainer>
        <ProfileAvatar
          src={avatar}
          alt={username}
          width="256px"
        />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </DescriptionContainer>
      <ProfileStats>
        <ProfileStatsEl>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
        </ProfileStatsEl>
        <ProfileStatsEl>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
        </ProfileStatsEl>
        <ProfileStatsEl>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
        </ProfileStatsEl>

      </ProfileStats>
      </Box>
    );
    
};