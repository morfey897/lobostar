import { createTheme as createMuiTheme } from '@mui/material/styles';
import darkTheme from './dark-theme';
import lightThene from "./light-theme";

import "@fontsource/montserrat";

const defaultTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1090,
      xl: 1400,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 100
    }
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Montserrat, sans-serif"
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          textTransform: "none",
          fontSize: "1.125rem",
          lineHeight: "22px",
          fontWeight: 600,
        },
        text: {
          fontWeight: 400,
          fontSize: "1rem",
        },
        contained: {
          borderRadius: "33px",
          padding: "16px 32px"
        },
        outlined: {
          fontSize: "1rem",
          lineHeight: "20px",
          fontWeight: 400,
          borderRadius: "33px",
          padding: "8px 32px",
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
        },
        input: {
          fontFamily: "Montserrat, sans-serif",
        },
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: "1rem",
          padding: "25px 16px"
        },
        head: {
          fontWeight: 600,
          fontSize: "1.25rem",
          padding: "30px 16px"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: "1rem",
          lineHeight: "19px",
          padding: "7px 33px",
        },
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          paddingRight: "20px"
        },
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    },
  }
};

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

export function createTheme(dark = false) {
  return createMuiTheme(mergeDeep({}, defaultTheme, dark ? darkTheme : lightThene));
}