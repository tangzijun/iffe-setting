import React from "react";
import "typeface-roboto"; // Google字体
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { SettingView } from "./components/setting/index";
import getAppTheme from "./app-theme";
import { LogIn } from "./components/login";
// import { Button } from "solidoc-base-component-lib";

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
      <Router>
        <div>
          <Link to={"/login"}></Link>
          <Link to={"/setting"}></Link>
          <Link to={"/iffe-setting"}></Link>
        </div>
        <div>
          <Route path="/" exact>
            <LogIn />
          </Route>
          <Route path="/iffe-setting" exact>
            <LogIn />
          </Route>
          <Route path="/login" exact>
            <LogIn />
          </Route>
          <Route path="/setting" exact>
            <SettingView />
          </Route>
        </div>
      </Router>
    </ThemeProvider>
  );
}
export default App;
