import React from "react";
import { Route } from "react-router-dom";
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
      {/*  社设置默认页面我的账户 */}
      <Route path="/setting" component={ToUserSettingsAccount} exact />
      {/* 我的账户 */}
      <Route exact path="/setting/usersettingsaccount">
        <div>
          <UserSettingsAccount />
        </div>
      </Route>
      {/* 隐私与安全 */}
      <Route exact path="/setting/privacyandsecurity">
        <div>
          <PrivacyAndSecurity />
        </div>
      </Route>
      {/* 方案与付款 */}
      <Route exact path="/setting/schemeandpayment">
        <div>
          <SchemeAndPayment />
        </div>
      </Route>
      {/* 语言 */}
      <Route exact path="/setting/language">
        <div>
          <Language />
        </div>
      </Route>
      {/* 外观 */}
      <Route exact path="/setting/theme">
        <div>
          <Theme />
        </div>
      </Route>
      {/* 通知 */}
      <Route exact path="/setting/message">
        <div>
          <Message />
        </div>
      </Route>
      {/* 快捷键 */}
      <Route exact path="/setting/shortcutkey">
        <div>
          <ShortcutKey />
        </div>
      </Route>
      {/* Markdown快捷键 */}
      <Route exact path="/setting/markdownkey">
        <div>
          <MarkdownShortcutkey />
        </div>
      </Route>
      {/* 更新日志 */}
      <Route exact path="/setting/updatelog">
        <div>
          <UpdateLog />
        </div>
      </Route>
      {/* 联系我们 */}
      <Route exact path="/setting/connectwithus">
        <div>
          <ConnectWithUs />
        </div>
      </Route>
    </div>
  );
}
export { SettingContent };
