import { TabFrom, TabKeyFrom } from "../../../shared/utils/createTabMaps";

export const settingsTabs = [
  { key: "color-theme", text: "Color Theme", path: "/settings/color-theme" },
  { key: "font-theme", text: "Font Theme", path: "/settings/font-theme" },
  {
    key: "change-password",
    text: "Change Password",
    path: "/settings/change-password",
  },
] as const;

export type SettingsTab = TabFrom<typeof settingsTabs>;
export type SettingsTabKey = TabKeyFrom<typeof settingsTabs>;
