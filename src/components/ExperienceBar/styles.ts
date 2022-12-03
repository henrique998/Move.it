import { styled } from "../../styles"

export const ExperienceBarContainer = styled('header', {
    display: 'flex',
    alignItems: 'center',

    span: {
        fontSize: '1rem',
    },

    '> div': {
        flex: 1,
        height: '4px',
        borderRadius: '4px',
        backgroundColor: '$grayLine',
        margin: '0 1.5rem',
        position: 'relative',
    }
})

export const ProgressBar = styled('div', {
    height: '4px',
    borderRadius: '4px',
    backgroundColor: '$green',
})

export const CurrentExperience = styled('span', {
    position: 'absolute',
    top: '0.75rem',
    transform: 'translateX(-50%)',
})
