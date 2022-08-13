import PropTypes from "prop-types"
import { DescriptionContainer, ProfileAvatar, ProfileName, ProfileTag, ProfileLocation, ProfileStats, ProfileStatsEl, ProfileStatsLabel, ProfileStatsQuantity } from "./Profile.styles";
import { Box } from "components/Box";

export const Profile = ({ user: { username, tag, location, avatar, stats } }) => {
  return (
    <Box
      marginTop="32px"
      marginBottom="32px"
      width="400px"
      boxShadow="0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20)"
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
      </DescriptionContainer>
      </Box>
    ); 
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape().isRequired
    }).isRequired,
};