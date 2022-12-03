import { styled } from "../../styles"

export const CountdownContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',

    fontWeight: 600,

    color: '$title',

    '> div': {
        flex: 1,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',

        backgroundColor: '$minutes',
        boxShadow: '0 0 60px rgba(0, 0, 0, 0.05)',
        borderRadius: 6,
        fontSize: '8.5rem',
        textAlign: 'center',

        span: {
            flex: 1,
        },

        'span:first-child': {
            borderRight: '1px solid $border2'
        },

        'span:last-child': {
            borderLeft: '1px solid $border2'
        }
    },

    '> span': {
        fontSize: '6.25rem',
        margin: '0 0.5rem',
    }
})

export const FinishedCycleButton = styled('button', {
    marginTop: '2rem',

    color: '$text',
    backgroundColor: '$white',

    fontSize: '1.25rem',
    fontWeight: 600,

    borderRadius: 6,

    width: '100%',
    height: '5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',

    cursor: 'auto',

    borderBottom: '5px solid $green',

    svg: {
        color: '$green',
    },
})