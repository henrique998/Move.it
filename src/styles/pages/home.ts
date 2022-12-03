import { styled } from ".."

export const HomeContainer = styled('div', {
    height: '100vh',
    maxWidth: '992px',
    margin: '0 auto',
    padding: '2.5rem 2rem',

    display: 'flex',
    flexDirection: 'column',

    section: {
        flex: 1,

        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '6.25rem',
        alignContent: 'center'
    }
})

export const CycleContainer = styled('div', {})

export const ChalengeContainer = styled('div', {})