
export default {
  palette: {
    mode: 'dark',
    primary: {
      main: "#CEB766",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
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
        outlinedSecondary: {
          color: "#ffffff",
          border: "1px solid #FFFFFF",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          "&:hover": {
            border: "1px solid #FFFFFF",
          }
        },
        containedSuccess: {
          color: "#ffffff",
          backgroundColor: "rgba(34, 125, 48, 0.6)",
        }
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
    MuiTab: {
      styleOverrides: {
        textColorPrimary: {
          background: "none",
          color: "#fff",
          borderRadius: "20px 20px 0px 0px",
          "&.Mui-selected": {
            color: "#fff",
            // /
            backgroundColor: "#1C2936"
          }
        },
      }
    }

  }
};
