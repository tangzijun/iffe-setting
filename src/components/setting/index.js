import React, { useState, useEffect } from "react";
import {
  SettingDirectory,
  SettingHintIcon,
  SettingHintText,
} from "@solidoc/setting";
import { ThemeWrap } from "solidoc-base-component-lib";
import { SettingContent } from "./setting-content/index";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
const dataSettingDirectory = require("./data/dataSettingDirectory.json");
const dataSettingHintIcon = require("./data/dataSettingHintIcon.json");

/**
 * @description: 设置页面
 * @param {type}
 * @return:
 */

const useStyles = makeStyles((theme) => ({
  setting: (newType) => ({
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: theme.app.Setting.color16,
  }),
  settingLeft: {
    display: "flex",
    justifyContent: "flex-end",
    width: "35%",
    height: "100%",
    backgroundColor: theme.app.Setting.color17,
    flexWrap: "wrap",
    overflow: "auto",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: 3,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.app.Setting.color18,
      borderRadius: 2,
    },
    // 火狐浏览器轨道宽度
    scrollbarWidth: "thin",
    // 火狐浏览器滑块颜色,轨道颜色
    scrollbarColor: "rgba(184,186,186,1) rgba(255,255,255,0)",
  },
  settingRight: {
    display: "flex",
    justifyContent: "flex-start",
    width: "65%",
    backgroundColor: theme.app.Setting.color14,
  },
  directory: {
    display: "flex",
    flexDirection: "column",
    width: 192,
    paddingTop: 60,
    paddingRight: 6,
    paddingBottom: 60,
    paddingLeft: 0,
  },
  content: {
    width: "100%",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
    overflow: "auto",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.app.Setting.color19,
      borderRadius: 2,
    },
    // 火狐浏览器轨道宽度
    scrollbarWidth: "thin",
    // 火狐浏览器滑块颜色,轨道颜色
    scrollbarColor: "rgba(184,186,186,1) rgba(255,255,255,0)",
  },
}));

function SettingView() {
  const getWindowSize = () => ({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleResize = () => {
    setWindowSize(getWindowSize());
  };
  useEffect(() => {
    // 监听
    window.addEventListener("resize", handleResize);
    // 销毁
    return () => window.removeEventListener("resize", handleResize);
  });

  const newType = {
    height: windowSize.innerHeight,
  };
  const classes = useStyles(newType);
  return (
    <Router>
      <div className={classes.setting} id="setting">
        <div className={classes.settingLeft}>
          <div className={classes.directory}>
            {/* 目录 */}
            <SettingDirectory data={dataSettingDirectory.nodes} />
            <SettingHintIcon data={dataSettingHintIcon.nodes} />
            <SettingHintText
              text={"Stable 58202 (6914c16)  OS X 10.15.4 64-Bit"}
            />
          </div>
        </div>
        {/* 内容 */}
        <div className={classes.settingRight}>
          <div className={classes.content}>
            <ThemeWrap>
              <SettingContent />
            </ThemeWrap>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default SettingView;
