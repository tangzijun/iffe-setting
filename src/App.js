import React from "react";
import "typeface-roboto"; // Google字体
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { SettingView } from "./components/setting/index";
import getAppTheme from "./app-theme";

// import Container from "@material-ui/core/Container";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(() => {
    const themeType = prefersDarkMode ? "dark" : "light";
    return createMuiTheme({
      app: getAppTheme(themeType),
      palette: {
        type: themeType,
        isDark: prefersDarkMode,
      },
    });
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Container fixed> */}
      <SettingView />
      {/* </Container> */}
    </ThemeProvider>
  );
}
export default App;
