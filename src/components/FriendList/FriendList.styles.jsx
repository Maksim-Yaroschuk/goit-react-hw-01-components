import styled from "styled-components";

export const FriendsContainer = styled.ul`
    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
    flex-direction: column;
    display: flex;
    width: 400px;
    padding-left: 0px;
`
export const FriendsItem = styled.li`
   margin-top: ${p => p.theme.space[2]}px;
   list-style-type: none;
   display: inline-flex;
   border: ${p => p.theme.borders.normal};
`
export const FriendStats = styled.span`
    padding-left: ${p => p.theme.space[3]}px;
    margin-top: ${p => p.theme.space[5]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
    margin-left: ${p => p.theme.space[4]}px;
    margin-right: ${p => p.theme.space[4]}px;
    background-color: green;
    border-radius: ${p => p.theme.radii.round};
    width: 32px;
`
export const FriendAvatar = styled.img`
    border-radius: ${p => p.theme.radii.lg};
    margin-top: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
`
export const FriendName = styled.p`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.bold};
    margin-left: ${p => p.theme.space[4]}px;
`