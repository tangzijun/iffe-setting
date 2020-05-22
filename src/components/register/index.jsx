import * as React from "react";
import { LogInWrap } from "./LoginWrap";
import imgURL from "./login.jpg";
/**
 * 登录组件
 * @param  LogIn
 * @returns
 */

function Regieter() {
  return (
    <div>
      <LogInWrap url={imgURL} />;
    </div>
  );
}
export { Regieter };
