import appThemeDefault from "./app-theme-defaule";

// 黑暗模式

const appThemeDark = {
  ...appThemeDefault,
  wrap: { color1: "rgb(54, 57, 63)" },
  settingWrap: {
    backgroundColor: "rgb(47, 49, 54)",
  },
  settingDirectory: {
    backgroundColor: "rgb(47, 49, 54)",
    scrollbarColor: "rgb(38,40,44)",
  },
  settingContent: {
    backgroundColor: "rgb(54, 57, 63)",
    scrollbarColor: "rgb(29,31,34)",
  },
};
export default appThemeDark;
