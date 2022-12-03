import { styled } from "../../styles";

export const ChallengeBoxContainer = styled('div', {
    height: '100%',

    backgroundColor: '$white',
    borderRadius: 6,
    boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)',
    padding: '1.5rem 2rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
})

export const ChallengeActive = styled('div', {
    height: '100%',

    display: 'flex',
    flexDirection: 'column',

    header: {
        color: '$blue500',
        fontWeight: 600,
        fontSize: '1.25rem',
        padding: '0 2rem 1.5rem',
        borderBottom: '1px solid $grayLine',
    },

    '> div': {
        flex: 1,

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        strong: {
            fontSize: '2rem',
            fontWeight: 600,
            color: '$title',
            margin: '1.5rem 0 1rem',
        },

        p: {
            lineHeight: 1.5,
        },
    },

    footer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
    }
})

export const ChallengeNotActive = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    strong: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1.4,
    },

    p: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1.4,
        maxWidth: '70%',
        marginTop: '3rem',

        img: {
            marginBottom: '1rem',
        }
    }
})