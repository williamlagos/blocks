import '../styles/globals.css'
import { grommet, Grommet } from 'grommet'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={grommet}>
      <Component {...pageProps} />
    </Grommet>
  )
}
export default MyApp
