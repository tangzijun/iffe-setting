import appThemeDark from './app-theme-dark';
import appThemeLight from './app-theme-light';

const getAppTheme = themeType => {
  if (themeType === 'dark') {
    return appThemeDark;
  }
  return appThemeLight;
};

export default getAppTheme;
export { appThemeDark, appThemeLight };
