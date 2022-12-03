import { X } from "phosphor-react";
import { useChallenges } from "../../contexts/ChallengesContext";
import { Button } from "../Button";
import { TwitterLogo } from "../TwitterLogo";
import { ModalClose, ModalContentContainer, ModalDescription, ModalTitle } from "./styles"

export function ModalContent() {
    const { level } = useChallenges()

    return (
        <ModalContentContainer>
            <header>{level}</header>

            <ModalClose>
                <X size={20} weight="fill" />
            </ModalClose>

            <ModalTitle>Parabéns</ModalTitle>
            <ModalDescription>Você alcançou um novo level.</ModalDescription>

            <Button
                label="Compartilhar no twitter"
                icon={<TwitterLogo />}
                color="light-blue"
                size="medium"
            />
        </ModalContentContainer>
    )
}