import { TabFrom, TabKeyFrom } from "../../../shared/utils/createTabMaps";
import { CHANGE_PASSWORD_URL, COLOR_THEME_URL, FONT_THEME_URL } from "./urls";

export const settingsTabs = [
  { key: "color-theme", text: "Color Theme", path: COLOR_THEME_URL },
  { key: "font-theme", text: "Font Theme", path: FONT_THEME_URL },
  {
    key: "change-password",
    text: "Change Password",
    path: CHANGE_PASSWORD_URL,
  },
] as const;

export type SettingsTab = TabFrom<typeof settingsTabs>;
export type SettingsTabKey = TabKeyFrom<typeof settingsTabs>;
