import '../styles/global.scss'
import GlobalStyle from '../styles/global'

import Header from '../components/Header'
import { Player } from '../components/Player'
import usePersistedState from '../utils/usePersistedState'

import styles from '../styles/app.module.scss'
import { PlayerContextProvider } from '../contexts/PlayerContext'

import { DefaultTheme, ThemeProvider } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
 
  return(
    <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <ThemeProvider theme={theme}>
              <Header toggleTheme={toggleTheme} />
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          </main>
          <Player />
        </div>
    </PlayerContextProvider>
  )
}

export default MyApp
