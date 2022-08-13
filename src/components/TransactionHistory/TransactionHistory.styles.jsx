import styled from "styled-components";

export const Table = styled.table`
    width: 800px;
    border-collapse: collapse;
    border: ${p => p.theme.borders.normal};
    margin-bottom: ${p => p.theme.space[5]};
`

export const THead = styled.thead`
    width: 800px;
    background-color: blue;
    color: ${p => p.theme.colors.white};
`
export const TBody = styled.tbody`
    color: ${p => p.theme.colors.black};
`
export const TRows = styled.tr`
`
export const Th = styled.th`
    text-transform: uppercase;
`
export const Td = styled.td`
    text-align: center;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.gratbackprim};
`
