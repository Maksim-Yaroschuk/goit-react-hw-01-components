import styled from "styled-components";

export const DescriptionContainer = styled.div`
    align-items: center;
    border: ${p => p.theme.borders.normal};
`;

export const ProfileAvatar = styled.img`
    border-radius: ${p => p.theme.radii.round};
    border: ${p => p.theme.borders.normal};
`;

export const ProfileName = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    text-align: center;
`