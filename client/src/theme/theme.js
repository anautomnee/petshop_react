import { createTheme } from '@mui/material/styles';
import Montserrat from "../static/Montserrat-VariableFont_wght.ttf"

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, Arial',
        fontSize: 20,
        fontWeight: 500,
        h1: {
            fontSize: 64,
            fontWeight: 700
        },
        h2: {
            fontSize: 40,
            fontWeight: 600
        },
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Montserrat';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Montserrat'), local('Montserrat-Regular'), url(${Montserrat}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
    palette: {
      primary: {
        main: '#0D50FF',
      },
      secondary: {
        main: '#282828',
      },
      extra: {
        main: '#F1F3F4',
      }
    },
  });