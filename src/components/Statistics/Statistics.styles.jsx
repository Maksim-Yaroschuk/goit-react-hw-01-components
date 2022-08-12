import styled from "styled-components";

export const StatTitle = styled.h2`
    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
    text-align: center;
`

export const StatList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-left: 0px;
`
export const StatItem = styled.li`
    padding-bottom: ${p => p.theme.space[4]}px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: ${p => p.theme.borders.normal};
    width: 25%
`
export const StatLabel = styled.span`
    /* color: ${p => p.theme.colors.white}; */
    font-size: ${p => p.theme.fontSizes.xs};
`
export const StatPercentage = styled.span`
    /* color: ${p => p.theme.colors.white}; */
    font-size: ${p => p.theme.fontSizes.l};
`