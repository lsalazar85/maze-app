import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "../styles/GlobalStyles";
import { MainContextProvider } from "../context/MainContext";

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyle />
        <MainContextProvider>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </MainContextProvider>
      </>
  )

}
