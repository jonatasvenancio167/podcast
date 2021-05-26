import 'styled-components' 

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: { 
            primary: string,
            secundary: string,
            background: string,
            background_home: string,
            background_button: string,
            border_button: string,
            border: string,
            text: string
            paragraph_header: string,
            span_header: string,
            text_h: string
        },
    } 
}