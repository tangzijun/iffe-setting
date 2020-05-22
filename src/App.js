import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  // withRouter,
} from "react-router-dom";
import { ThemeWrap } from "solidoc-base-component-lib";
import SettingView from "./components/setting/index";
import { LogIn } from "./components/login";

/**
 * @description: 项目入口
 * @param {type}
 * @return:
 */

function App() {
  return (
    <ThemeWrap>
      <Router>
        <div>
          <Link to={"/"}></Link>
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
    </ThemeWrap>
  );
}
export default App;
