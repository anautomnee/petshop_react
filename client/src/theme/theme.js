import { createTheme } from '@mui/material/styles';
import Montserrat from "../static/Montserrat-VariableFont_wght.ttf"

export const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat, Arial',
        body1: {
          fontSize: 20,
          fontWeight: 600,
        },
        h1: {
            fontSize: 96,
            fontWeight: 800,
            '@media (max-width:1240px)': {
            fontSize: 82,
            },
            '@media (max-width:900px)': {
            fontSize: 64,
            },
            '@media (max-width:740px)': {
            fontSize: 52,
            },
        },
        h2: {
            fontSize: 64,
            fontWeight: 900,
            '@media (max-width:1240px)': {
            fontSize: 48,
          },
          '@media (max-width:900px)': {
            fontSize: 42,
            },
            '@media (max-width:740px)': {
            fontSize: 36,
            },
        },
        h3: {
            fontSize: 40,
            fontWeight: 600,
            '@media (max-width:1240px)': {
            fontSize: 36,
          },
          '@media (max-width:900px)': {
            fontSize: 32,
            },
            '@media (max-width:740px)': {
            fontSize: 28,
            },
        },
        button: {
            textTransform: 'none'
        },
        crossed: {
          color: "#8B8B8B",
          textDecoration: "line-through"
        },
        description: {
          color: "#282828",
          fontSize: 16,
          fontWeight: 400,
          width: 548
        }
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
        MuiDialog: {
          styleOverrides: {
            paper: {
              backgroundColor: '#0D50FF',
              borderRadius: 16,
              color: '#FFFFFF',
              padding: "32px"
            }
          }
        }
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
      },
      order: {
        main: '#8B8B8B'
      }
    },
    breakpoints: {
      values: {
        xxs: 0,
        xs: 480,
        sm: 740,
        md: 980,
        lg: 1240,
        xl: 1420,
      },
    },
  });
