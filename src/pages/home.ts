import styled from 'styled-components'

export const Li = styled.li`
    background: ${props => props.theme.colors.background_home};
    border: 1px solid ${props => props.theme.colors.border};
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;

    display: flex;
    align-items: center;
`

export const TitleEpisode = styled.a`
    color: ${props => props.theme.colors.text};
`

export const Button = styled.button`

    background: ${props => props.theme.colors.background_button};
    border: 1px solid ${props => props.theme.colors.border_button};

`

export const Th = styled.th`
    border-bottom: 1px solid ${props => props.theme.colors.border};
`
export const Td = styled.td`
    border-bottom: 1px solid ${props => props.theme.colors.border};
`