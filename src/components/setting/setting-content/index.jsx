import React from "react";
import { Switch, Route } from "react-router-dom";
import { UserSettingsAccount } from "./view/UserSettingsAccount";
import { PrivacyAndSecurity } from "./view/PrivacyAndSecurity";
import { SchemeAndPayment } from "./view/SchemeAndPayment";
import { Language } from "./view/Language";
import { Theme } from "./view/Theme";
import { Message } from "./view/Message";
import { ShortcutKey } from "./view/ShortcutKey";
import { MarkdownShortcutkey } from "./view/MarkdownShortcutkey";
import { UpdateLog } from "./view/UpdateLog";
import { ConnectWithUs } from "./view/ConnectWithUs";
import { LogIn } from "../../login/index";
function ToUserSettingsAccount() {
  return (
    <div>
      <UserSettingsAccount />
    </div>
  );
}
function SettingContent() {
  return (
    <div>
      <Switch>
        {/*  社设置默认页面我的账户 */}
        <Route path="/iffe-setting" component={ToUserSettingsAccount} exact />
        {/* 我的账户 */}
        <Route exact path="/usersettingsaccount">
          <div>
            <UserSettingsAccount />
          </div>
        </Route>
        {/* 隐私与安全 */}
        <Route exact path="/privacyandsecurity">
          <div>
            <PrivacyAndSecurity />
          </div>
        </Route>
        {/* 方案与付款 */}
        <Route exact path="/schemeandpayment">
          <div>
            <SchemeAndPayment />
          </div>
        </Route>
        {/* 语言 */}
        <Route exact path="/language">
          <div>
            <Language />
          </div>
        </Route>
        {/* 外观 */}
        <Route exact path="/theme">
          <div>
            <Theme />
          </div>
        </Route>
        {/* 通知 */}
        <Route exact path="/message">
          <div>
            <Message />
          </div>
        </Route>
        {/* 快捷键 */}
        <Route exact path="/shortcutkey">
          <div>
            <ShortcutKey />
          </div>
        </Route>
        {/* Markdown快捷键 */}
        <Route exact path="/markdownkey">
          <div>
            <MarkdownShortcutkey />
          </div>
        </Route>
        {/* 更新日志 */}
        <Route exact path="/updatelog">
          <div>
            <UpdateLog />
          </div>
        </Route>
        {/* 联系我们 */}
        <Route exact path="/connectwithus">
          <div>
            <ConnectWithUs />
          </div>
        </Route>
        <Route exact path="/login">
          <div>
            <LogIn />
          </div>
        </Route>
      </Switch>
    </div>
  );
}
export { SettingContent };
