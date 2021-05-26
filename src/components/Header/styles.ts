import styled from 'styled-components'

export const Container = styled.header`
    background: ${props => props.theme.colors.primary};
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;
    border-bottom: 1px solid #e6e8eb;
  }
`