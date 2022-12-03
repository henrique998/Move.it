import { styled } from "../../styles";

export const CompletedChallengesContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    margin: '3.5rem 0',
    paddingBottom: '1rem',
    borderBottom: '1px solid $border',

    fontWeight: 500,

    'span:first-child': {
        fontSize: '1.25rem',
    },

    'span:last-child': {
        fontSize: '1.5rem',
    }
})