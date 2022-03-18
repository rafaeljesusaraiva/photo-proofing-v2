import { createTheme } from "@mui/material";

const theme_borderRadius = "10px";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    // Name of the component
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: theme_borderRadius,
        },
      },
    },
    MuiButton: {
      styleOverrides: { root: { borderRadius: theme_borderRadius } },
    },
    MuiTextField: {
      styleOverrides: { root: { borderRadius: theme_borderRadius } },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: theme_borderRadius } },
    },
  },
});

export default darkTheme;
