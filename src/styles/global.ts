import { globalCss } from ".";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$background',
    },

    'body, input, textarea, button': {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 400,
        color: '$text',
    },

    button: {
        backgroundColor: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
    },

    a: {
        textDecoration: 'none',
    },

    ul: {
        listStyleType: 'none'
    },

    label: {
        cursor: 'pointer',
    },

    '.countdown-button': {
        marginTop: '2rem',
    }
})