import Head from "next/head"

import { ChallengeBox } from "../components/ChallengeBox"
import { CompletedChallenges } from "../components/CompletedChallenges"
import { Countdown } from "../components/Countdown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"

import { CycleContainer, HomeContainer } from "../styles/pages/home"

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <CycleContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </CycleContainer>

        <div>
          <ChallengeBox />
        </div>
      </section>
    </HomeContainer>
  )
}