import styled from "styled-components";

export const DescriptionContainer = styled.div`
    background: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radii.lg};
    border-bottom-color: white; 
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
    margin-bottom: ${p => p.theme.space[5]}px;
`
export const ProfileStats = styled.ul`
    background-color: ${p => p.theme.colors.graytext};
    margin-top: ${p => p.theme.space[0]}px;
    padding-left: 0px;
    display: flex;
    justify-content: space-between;
    border-top: ${p => p.theme.borders.normal};
    border-top-color: ${p => p.theme.colors.gratbackprim};
`
export const ProfileStatsEl = styled.li`
    background-color: ${p => p.theme.colors.gratbackprim};
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    width: 33.4%;
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