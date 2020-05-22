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
import { Regieter } from "./components/register";

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
          <Link to={"/regieter"}></Link>
          <Link to={"/iffe-setting"}></Link>
        </div>
        <div>
          <Route path="/" exact>
            <LogIn />
          </Route>
          {/* 默认首页面 */}
          <Route path="/iffe-setting" exact>
            <Regieter />
          </Route>
          {/* 登录 */}
          <Route path="/login" exact>
            <LogIn />
          </Route>
          {/* 注册 */}
          <Route path="/regieter" exact>
            <Regieter />
          </Route>
          {/* 设置 */}
          <Route path="/setting" exact>
            <SettingView />
          </Route>
        </div>
      </Router>
    </ThemeWrap>
  );
}
export default App;
