import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
    background: {
        background1: '#FEFEFE',
        background2: '#F7F7F7',
        background3: '#F1F1F1',
        background4: '#E3E2E2',
        background5: '#F6F6F6',
    },
    lile: '#8675FF',
    mint: '#7FE3A7',
    night: '#3B3664',
    purple: '#7469D9',
    salmon: '#FF6481',
    sky: '#4DBEFF',
    spearl: '#E1E1E1',
    summer: '#FDB561',
    text: {
        text1: '#1C2026',
        text2: '#383C44',
        text3: '#5F6674',
        text4: '#878F9E',
        text5: '#B4BAC5',
        text6: '#D7DBE3',
        text7: '#E9ECF1'
    }
};

export const theme = createMuiTheme({
    palette: {
        background: {
            default: colors.background.background2,
            primary: colors.background.background5
        },
        primary: {
            main: colors.purple
        },
        text: {
            primary: colors.text.text2,
            hint: colors.text.text4
        }
    },
    typography: {
        body1: {
            fontSize: 16,
            fontWeight: '300'
        },
        body2: {
            fontSize: 14
        },
        h3: {
            fontWeight: '600',
            fontSize: 24
        },
        fontFamily: 'Poppins'
    },
    overrides: {
        MuiDivider: {
            root: {
                backgroundColor: '#D8D8D8'
            }
        }
    }
});
