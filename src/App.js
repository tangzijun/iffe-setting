import React from "react";
import "typeface-roboto"; // Google字体
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SettingView } from "./components/setting/index";
import getAppTheme from "./app-theme";
import { LogIn } from "./components/login";

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
          <Link to={"./login"}></Link>
          <Link to={"./setting"}></Link>
        </div>

        <Switch>
          <Route path="/" exact>
            <div>
              <LogIn />
            </div>
          </Route>
          <Route path="/iffe-setting" exact>
            <div>
              <LogIn />
            </div>
          </Route>
          <Route path="/login" exact>
            <div>
              <LogIn />
            </div>
          </Route>
          <Route exact path="/setting">
            <div>
              <SettingView />
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
