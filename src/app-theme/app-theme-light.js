import appThemeDefault from "./app-theme-defaule";

// 明亮模式

const appThemeLight = {
  ...appThemeDefault,
  wrap: { color1: "rgb(255,255,255)" },
  settingWrap: {
    backgroundColor: "#ffffff",
  },
  settingDirectory: {
    backgroundColor: "rgb(242,243,245)",
    scrollbarColor: "rgb(193,195,199)",
  },
  settingContent: {
    backgroundColor: "rgb(255,255,255)",
    scrollbarColor: "rgb(137,137,137)",
  },
};
export default appThemeLight;
