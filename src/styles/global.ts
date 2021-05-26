import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.colors.background};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme.colors.text_h};
    }
    
`
export default GlobalStyle