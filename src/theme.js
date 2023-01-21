import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // codebridge red as primary color
      main: "#bb0000ff",
    },
    secondary: {
      // dark grey as secondary
      main: "#5A5A5A",
    },
  },

  typography: {
    fontSize: 12,
  },

  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            padding: theme.spacing(2),
            borderWidth: "1.1px",
          },
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

export default theme;
