import { useChallenges } from "../../contexts/ChallengesContext";
import { CurrentExperience, ExperienceBarContainer, ProgressBar } from "./styles";

export function ExperienceBar() {
   const { currentExperience, experienceToNextLevel } = useChallenges()

   const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

   return (
      <ExperienceBarContainer>
         <span>0 xp</span>

         <div>
            <ProgressBar css={{ width: `${percentToNextLevel}%` }} />

            <CurrentExperience css={{ left: `${percentToNextLevel}%` }}>
               {currentExperience} xp
            </CurrentExperience>
         </div>

         <span>{experienceToNextLevel} xp</span>
      </ExperienceBarContainer>
   )
}