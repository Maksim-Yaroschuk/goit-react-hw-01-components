import styled from "styled-components";

export const ProfileContainer = styled.div`
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.lg}; 
`

export const DescriptionContainer = styled.div`
    background: ${p => p.theme.colors.white};
    
`;

export const ProfileAvatar = styled.img`
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
    margin-top: ${p => p.theme.space[5]}px;
    margin-left: ${p => p.theme.space[6]}px;
    margin-right: ${p => p.theme.space[6]}px;
`;

export const ProfileName = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    text-align: center;
    margin-bottom: ${p => p.theme.space[0]}px;
`

export const ProfileTag = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.graytext};
    text-align: center;
`

export const ProfileLocation = styled.p`
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.graytext};
    text-align: center;
`
export const ProfileStats = styled.ul`
    background-color: ${p => p.theme.colors.gratbackprim};
    margin-top: ${p => p.theme.space[5]}px;
    padding-left: 0px;
    display: flex;
    justify-content: space-between;
`
export const ProfileStatsEl = styled.li`
    border: ${p => p.theme.borders.normal};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 33.3%;
    text-align: center;
`
export const ProfileStatsLabel = styled.span`
    color: ${p => p.theme.colors.graytext};
    font-size: ${p => p.theme.fontSizes.s};
`
export const ProfileStatsQuantity = styled.span`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
`