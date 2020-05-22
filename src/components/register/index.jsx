import * as React from "react";
import { RegieterWrap } from "./RegieterWrap";
import imgURL from "./login.jpg";
/**
 * 登录组件
 * @param  LogIn
 * @returns
 */

function Regieter() {
  return (
    <div>
      <RegieterWrap url={imgURL} />;
    </div>
  );
}
export { Regieter };
