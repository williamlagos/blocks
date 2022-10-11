import '../styles/globals.css'
import { grommet, Grommet } from 'grommet'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Grommet theme={grommet}>
        <Component {...pageProps} />
      </Grommet>
    </ApolloProvider>
  )
}
export default MyApp
