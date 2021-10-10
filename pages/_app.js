import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "../styles/GlobalStyles";

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function MyApp({ Component, pageProps }) {
  return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  )

}
