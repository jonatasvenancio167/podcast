import { Container, Paragraph, Span } from './styles'
import { ThemeContext } from 'styled-components' 

import styles from './styles.module.scss'
import Switch from 'react-switch'

import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

import React, { useContext } from 'react'
import { shade } from 'polished'

interface Props{
    toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })

    const { colors, title } = useContext(ThemeContext) 

    return(
        <Container>
            <img src="/logo.svg" alt="Podcastr"/>
            
            <Paragraph>O melhor para você ouvir, sempre</Paragraph>

            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                className={styles.switch}
                height={10}
                width={40}
                handleDiameter={30}
                offColor={shade(0.15, colors.primary)}
                onColor={colors.secundary}
                offHandleColor="#333333"
            />
            
            <Span>{currentDate}</Span>
        </Container>
    )
}

export default Header


