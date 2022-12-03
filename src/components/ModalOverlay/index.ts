import * as Dialog from "@radix-ui/react-dialog"
import { styled } from "../../styles"

export const ModalOverlay = styled(Dialog.Overlay, {
    position: 'fixed',
    inset: 0,
    zIndex: 100,

    background: 'rgba(242, 243, 245, 0.8)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})