import React from "react";
import {
  SettingDirectory,
  SettingHintIcon,
  SettingHintText,
} from "solidoc-base-component-lib";
import { SettingContent } from "./setting-content/index";
import { makeStyles } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
const dataSettingDirectory = require("./data/dataSettingDirectory.json");
const dataSettingHintIcon = require("./data/dataSettingHintIcon.json");

const useStyles = makeStyles((theme) => ({
  setting: {
    display: "flex",
    justifyContent: "center",
    //     height: windowHeight
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: theme.app.settingWrap.backgroundColor,
    //     height: 2000,
  },
  settingLeft: {
    display: "flex",
    justifyContent: "flex-end",
    // width: "35%",
    height: "100%",
    backgroundColor: theme.app.settingDirectory.backgroundColor,
  },
  settingRight: {
    display: "flex",
    justifyContent: "flex-start",
    // width: "65%",
    backgroundColor: theme.app.settingContentArea.backgroundColor,
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
    // width: 740,
    width: "100%",
    height: 1000,
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
      backgroundColor: "rgba(184,186,186,1)",
      borderRadius: 2,
    },
  },
}));

function SettingView() {
  const classes = useStyles();
  // useEffect(() => {
  //   const windowHeight = window.innerHeight;
  // });
  return (
    <Router>
      <div className={classes.setting}>
        <div className={classes.settingLeft}>
          <div className={classes.directory}>
            {/* 目录 */}
            <SettingDirectory data={dataSettingDirectory.nodes} />
            <SettingHintIcon data={dataSettingHintIcon.nodes} />
            <SettingHintText
              text={"Stable 58202 (6914c16)"}
              des={"OS X 10.15.4 64-Bit"}
            />
          </div>
        </div>
        {/* 内容 */}
        <div className={classes.settingRight}>
          <div className={classes.content}>
            <SettingContent />
          </div>
        </div>
      </div>
    </Router>
  );
}
export { SettingView };
