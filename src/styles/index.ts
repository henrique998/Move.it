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
            background: '',

            text: '',
        }
    },
    media: {
        sm: "(max-width: 414px)",
    }
})