import { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { fonts, colors } from "./constants";
import Landing from "./components/Landing";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkTheme");

    // Non boolean values will cause an error
    // using (typeof isDark === "boolean") requires parsing which throws an error if 'isDark' isn't a valid JSON string
    if (isDark && (isDark === "true" || isDark === "false")) {
      return setDarkTheme(JSON.parse(isDark));
    }

    // dark mode will be turned ON if it is night time & if the user has not turned it off manually
    const date = new Date();
    const hours = date.getHours();
    const isNight = hours >= 22 || hours <= 9; // between 10pm and 9am

    isNight && setDarkTheme(true);
  }, []);

  let theme = createTheme({
    typography: {
      fontFamily: fonts.main,
      allVariants: {
        color: colors.textBlack,
      },
    },
    palette: {
      type: darkTheme ? "dark" : "light",
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
      },
      text: {
        secondary: darkTheme ? colors.textGreyDarkMode : colors.textGrey,
      },
      background: {
        default: darkTheme ? colors.dark : colors.light,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 700,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  const toggleTheme = () => {
    setDarkTheme((prevState) => {
      localStorage.setItem("darkTheme", JSON.stringify(!prevState));
      return !prevState;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <div className="App">
          <Landing darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
