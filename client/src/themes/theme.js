import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold"
    },
    body2: {
      fontSize: 14,
      lineHeight: 19/14,
      fontWeight: 400,
      color: '#B0B0B0'
    },
    h3: {
      fontWeight: 600,
      fontSize: 26,
      color: '#000',
      lineHeight: 40/26,
      marginBottom: 12,
    }
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: 'bold',
      },
      root: {
        marginBottom: 39,
        '&.MuiInput-underline:before' : {
          borderColor : '#D5DFEE'
        }
      }
    },
    MuiButton: {
      outlined: {
        color: '#3A8DFF',
        fontWeight: 600,
        lineHeight: 19/14,
        borderRadius: 5,
        border: 'none',
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        minWidth: 140,
        padding: '16px 33px 19px 34px',
        whiteSpace: 'nowrap',
        '&:hover': {
          backgroundColor: '#3A8DFF',
          color: '#fff',
        }
      },
      contained: {
        backgroundColor: '#3A8DFF',
        color: '#fff',
        minWidth: 160,
        borderRadius: 3,
        border: '1px solid #3A8Dff',
        boxShadow: 'none',
        '&.MuiButton-containedSizeLarge' : {
          padding: '16px 33px 12px 30px',
        },
        '&:hover': {
          backgroundColor: '#fff',
          color: '#3A8DFF',
          boxShadow: 'none',
        }
      }
    },
    MuiInputBase: {
      input: {
        paddingBottom: 8,
      }
    },
    MuiInputLabel: {
      formControl: {
        transform: 'translateY(34px)',
        color: '#B0B0B0',
        fontSize: 14,
      },
    },
    MuiFormControl: {
      root: {
        width: '100%',
      }
    },
    MuiFormLabel : {
      root: {
        '&.Mui-focused': {
          color: '#B0B0B0',
          fontSize: 14,
        },
        width: '100%',
        '&.MuiInputLabel-shrink' : {
          transform: 'none'
        },
        '& + .MuiInput-formControl' : {
          marginTop: 30,
        },
      },
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" }
  }
});
