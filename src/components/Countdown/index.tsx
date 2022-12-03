import { CaretRight, CheckCircle, X } from "phosphor-react"
import { useCountdown } from "../../contexts/CountdownContext"
import { Button } from "../Button"
import { CountdownContainer, FinishedCycleButton } from "./styles"


export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        resetCountdown,
        startCountdown
    } = useCountdown()

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <CountdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </CountdownContainer>

            {hasFinished ? (
                <FinishedCycleButton
                    disabled
                >
                    Clico encerrado

                    <CheckCircle
                        size={20}
                        weight="fill"
                    />
                </FinishedCycleButton>
            ) : (
                <>
                    {isActive ? (
                        <Button
                            label="Abandonar novo ciclo"
                            icon={<X size={20} weight="fill" />}
                            color="white"
                            className="countdown-button"
                            onClick={resetCountdown}
                        />
                    ) : (
                        <Button
                            label="Iniciar um novo ciclo"
                            icon={<CaretRight size={20} weight="fill" />}
                            className="countdown-button"
                            onClick={startCountdown}
                        />
                    )}
                </>
            )}
        </div>
    )
}