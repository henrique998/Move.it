import type { AppProps } from 'next/app'
import { ChallengesContextProvider } from '../contexts/ChallengesContext'
import { CountdownContextProvider } from '../contexts/CountdownContext'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesContextProvider>
      <CountdownContextProvider>
        <Component {...pageProps} />
      </CountdownContextProvider>
    </ChallengesContextProvider>
  )
}
