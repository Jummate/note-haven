import {
  CHANGE_PASSWORD_URL,
  COLOR_THEME_URL,
  FONT_THEME_URL,
} from "./constants/urls";
import Settings from "./pages/Settings";

export const settingsRoutes = [
  {
    path: COLOR_THEME_URL,
    component: <Settings.ColorTheme />,
  },
  {
    path: FONT_THEME_URL,
    component: <Settings.FontTheme />,
  },
  {
    path: CHANGE_PASSWORD_URL,
    component: <Settings.ChangePassword />,
  },
];
