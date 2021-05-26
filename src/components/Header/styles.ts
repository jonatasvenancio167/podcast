import styled from 'styled-components'

export const Container = styled.header`
    background: ${props => props.theme.colors.primary};
    height: 6.5rem;

    display: flex;
    align-items: center;

    padding: 2rem 4rem;
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`

export const Paragraph = styled.p`
  margin-left: 2rem;
  padding: 0.25rem 0 0.25rem 2rem;
  color: ${props => props.theme.colors.paragraph_header};
  border-left: 1px solid #e6e8eb;
`

export const Span = styled.span`
  margin-left: auto;
  text-transform: capitalize;
  color: ${props => props.theme.colors.span_header};
`