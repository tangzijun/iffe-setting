import * as React from "react";
import { LogInWrap } from "./LoginWrap";
// const imgURL = require("../../../public/assets/login.jpg");
import imgURL from "./login.jpg";
/**
 * 登录组件
 * @param  LogIn
 * @returns
 */

function LogIn() {
  return (
    <div>
      <LogInWrap url={imgURL} QRcode={1} />;
    </div>
  );
}
export { LogIn };
