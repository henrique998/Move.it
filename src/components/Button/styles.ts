import { styled } from "../../styles";

export const ButtonContainer = styled('button', {
    color: '$white',

    fontWeight: 600,

    borderRadius: 6,
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',

    svg: {
        color: '$white',
    },

    variants: {
        color: {
            blue: {
                backgroundColor: '$blue500',

                transition: 'filter 0.2s',

                '&:hover': {
                    filter: 'brightness(0.75)'
                },
            },
            'light-blue': {
                backgroundColor: '$blue300',

                transition: 'filter 0.2s',

                '&:hover': {
                    filter: 'brightness(0.75)'
                },
            },
            white: {
                backgroundColor: '$white',

                color: '$text',

                svg: {
                    color: '$text'
                },

                transition: 'background-color 0.2s',

                '&:hover': {
                    backgroundColor: '$red',
                    color: '$white',

                    svg: {
                        color: '$white'
                    },
                },
            },
            red: {
                backgroundColor: '$red',

                transition: 'filter 0.2s',

                '&:hover': {
                    filter: 'brightness(0.75)'
                },
            },
            green: {
                backgroundColor: '$green',

                transition: 'filter 0.2s',

                '&:hover': {
                    filter: 'brightness(0.75)'
                },
            }
        },
        size: {
            large: {
                fontSize: '1.25rem',
                height: '5rem'
            },
            medium: {
                fontSize: '1rem',
                height: '3.125rem'
            },
        },
    },

    defaultVariants: {
        color: 'blue',
        size: 'large'
    }
})