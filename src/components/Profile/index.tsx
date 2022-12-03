import Image from "next/image"
import { useChallenges } from "../../contexts/ChallengesContext"
import { ProfileContainer } from "./styles"

export function Profile() {
    const { level } = useChallenges()

    return (
        <ProfileContainer>
            <Image
                src="https://github.com/henrique998.png"
                alt="henrique monteiro"
                width={16.5}
                height={16.5}
            />

            <div>
                <strong>Henrique monteiro</strong>

                <p>
                    <img src="/icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </ProfileContainer>
    )
}