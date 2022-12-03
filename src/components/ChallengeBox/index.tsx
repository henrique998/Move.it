import * as Dialog from "@radix-ui/react-dialog"
import { useState } from "react"

import { useChallenges } from "../../contexts/ChallengesContext"
import { useCountdown } from "../../contexts/CountdownContext"

import { Button } from "../Button"
import { ModalContent } from "../ModalContent"
import { ModalOverlay } from "../ModalOverlay"
import { ChallengeActive, ChallengeBoxContainer, ChallengeNotActive } from "./styles"

export function ChallengeBox() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()
    const { resetCountdown } = useCountdown()

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
        setIsModalOpen(true)
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <ChallengeBoxContainer>
            {activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <div>
                        <img src={`/icons/${activeChallenge.type}.svg`} alt="" />

                        <strong>Novo desafio</strong>

                        <p>{activeChallenge.description}</p>
                    </div>

                    <footer>
                        <Button
                            label="Falhei"
                            color="red"
                            size="medium"
                            onClick={handleChallengeFailed}
                        />

                        <Button
                            label="Completei"
                            color="green"
                            size="medium"
                            onClick={handleChallengeSucceeded}
                        />
                    </footer>
                </ChallengeActive>
            ) : (
                <ChallengeNotActive>
                    <strong>Finalize um ciclo para recerber um desafio</strong>

                    <p>
                        <img src="/icons/level-up.svg" alt="" />

                        Avance de level completando desafios.
                    </p>
                </ChallengeNotActive>
            )}

            <Dialog.Root open={isModalOpen} onOpenChange={open => setIsModalOpen(open)}>
                <Dialog.Portal>
                    <ModalOverlay />

                    <ModalContent />
                </Dialog.Portal>
            </Dialog.Root>
        </ChallengeBoxContainer>
    )
}