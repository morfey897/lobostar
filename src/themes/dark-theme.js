
export default {
  palette: {
    mode: 'dark',
    primary: {
      main: "#CEB766",
      contrastText: "#fff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#CEB766"
    }
  },
  typography: {

  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#111B25",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        textSecondary: {
          color: "#ffffff",
        },
        outlinedPrimary: {
          color: "#ffffff",
          border: "2px solid #CEB766",
          "&:hover": {
            border: "2px solid #CEB766",
          }
        },
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "rgba(206, 183, 102, 0.3)",
          }
        },
      }
    },
  }
};
