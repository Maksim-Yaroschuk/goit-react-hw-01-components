import { StatTitle, StatList, StatItem, StatLabel, StatPercentage } from "./Statistics.styles"
import { Box } from "components/Box"

export const Statistics = ({ data, title }) => {
  return (
    <Box
      as="section"
      border="1px solid"
      displax="flex"
      width="400px"
      background="white"
    >
      <StatTitle>{title.toUpperCase()}</StatTitle>
        <StatList>
          {data.map((dat) => {
     return <StatItem key={dat.id}>
              <StatLabel>{ dat.label }</StatLabel>
              <StatPercentage>{ dat.percentage }</StatPercentage>
            </StatItem>
          })}
        </StatList>
    </Box>  

    )
}