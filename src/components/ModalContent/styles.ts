import * as Dialog from "@radix-ui/react-dialog"
import { styled } from "../../styles"

export const ModalContentContainer = styled(Dialog.Content, {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '100',
    maxWidth: '25rem',
    width: '100%',
    boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)',
    padding: '2rem',
    backgroundColor: '$white',
    borderRadius: 6,
    textAlign: 'center',

    header: {
        fontSize: '8.75rem',
        fontWeight: 600,
        color: '$blue500',
        background: 'url(/icons/levelup.svg) no-repeat center',
        backgroundSize: 'contain'
    }
})

export const ModalClose = styled(Dialog.Close, {
    position: 'absolute',
    top: '1.25rem',
    right: '1.25rem',

    svg: {
        color: '$text'
    }
})

export const ModalTitle = styled(Dialog.Title, {
    fontSize: '2.25rem',
    color: '$title',
    marginTop: '1.5rem',
})

export const ModalDescription = styled(Dialog.Description, {
    fontSize: '1.25rem',
    color: '$text',
    marginTop: '0.25rem',
    marginBottom: '2rem',
})