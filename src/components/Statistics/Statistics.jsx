import PropTypes from 'prop-types';
import {
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styles';
import { Box } from 'components/Box';

export const Statistics = ({ data, title }) => {
  return (
    <Box as="section" displax="flex" width="400px" background="white">
      {title && <StatTitle>{title.toUpperCase()}</StatTitle>}
      <StatList>
        {data.map(({ id, label, percentage }) => {
          return (
            <StatItem key={id}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string,
};
