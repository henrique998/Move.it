import { ComponentProps, ReactElement, ReactSVG } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
    label: string
    icon?: ReactElement<ReactSVG>
}

export function Button({ label, icon, ...rest }: ButtonProps) {
    return (
        <ButtonContainer {...rest}>
            {label}

            {icon}
        </ButtonContainer>
    )
}