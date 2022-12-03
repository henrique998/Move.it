import { createStitches } from "@stitches/react"

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            background: '#F2F3F5',

            title: '#2E384D',
            text: '#666666',

            white: '#FFFFFF',
            green: '#3FB023',
            red: '#E83F5B',

            blue500: '#5965E0',
            blue300: '#2AA9E0',

            grayLine: '#DCDDE0',

            border: '#D7D8DA',
            border2: '#F0F1F3',
            minutes: '#FFFFFF',
        }
    },
    media: {
        sm: "(max-width: 414px)",
    }
})