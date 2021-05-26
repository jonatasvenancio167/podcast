import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.colors.background};
    }

    body, input, textarea, button {
        font: 500 1rem Inter, sans-serif;
        color: var(--gray-500);
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        font-family: Lexend, sans-serif;
        color: var(--gray-800);
    }
    
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    button {
        cursor: pointer;
    }
`
export default GlobalStyle