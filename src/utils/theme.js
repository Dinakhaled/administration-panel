import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1063DE",
      light: "#3B86FF"
    },
    secondary: {
      main: "#30475E",
      light: "#EDF1F6"
    },
    warning: {
      main: "#FFBD35",
      contrastText: "#ffffff"
    }
  },
  typography: {
    h1: {
      fontWeight: "bold"
    },
    h2: {
      fontWeight: "bold"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 6px #0000000a"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 30px"
        },
        contained: {
          boxShadow: "none"
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    }
  }
});

export default theme;
