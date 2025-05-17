export type TabItem = {
  key: string;
  text: string;
  path: string;
};

export type TabFrom<T extends readonly TabItem[]> = T[number];

export type TabKeyFrom<T extends readonly TabItem[]> = TabFrom<T>["key"];

export function createTabsMap<T extends readonly TabItem[]>(tabList: T) {
  return Object.fromEntries(tabList.map((tab) => [tab.key, tab])) as Record<
    TabKeyFrom<T>,
    TabFrom<T>
  >;
}

export const footerTabs = [
  { key: "home", text: "All Notes", path: "/notes" },
  { key: "archived", text: "Archived Notes", path: "/notes/archived" },
  { key: "tags", text: "Tags", path: "/notes/tags" },
  { key: "settings", text: "Settings", path: "/settings" },
] as const;

export const sideBarTabs = [
  { key: "notes", text: "All Notes", path: "/notes" },
  { key: "archived", text: "Archived Notes", path: "/notes/archived" },
] as const;

export const settingsTabs = [
  { key: "color-theme", text: "Color Theme", path: "/settings/color-theme" },
  { key: "font-theme", text: "Font Theme", path: "/settings/font-theme" },
  {
    key: "change-password",
    text: "Change Password",
    path: "/settings/change-password",
  },
] as const;

export type FooterTab = TabFrom<typeof footerTabs>;
export type FooterTabKey = TabKeyFrom<typeof footerTabs>;

export type SettingsTab = TabFrom<typeof settingsTabs>;
export type SettingsTabKey = TabKeyFrom<typeof settingsTabs>;

export type SideBarTab = TabFrom<typeof sideBarTabs>;
export type SideBarTabKey = TabKeyFrom<typeof sideBarTabs>;

// export const tabs = [
//   { key: "home", text: "All Notes", path: "/notes" },
//   { key: "notes", text: "All Notes", path: "/notes/allnotes" },
//   //   { key: "search", text: "Search", path: "/notes/search" },
//   { key: "archived", text: "Archived Notes", path: "/notes/archived" },
//   { key: "tags", text: "Tags", path: "/notes/tags" },
//   { key: "settings", text: "Settings", path: "/settings" },

//   { key: "color-theme", text: "Color Theme", path: "/settings/color-theme" },
//   { key: "font-theme", text: "Font Theme", path: "/settings/font-theme" },
//   {
//     key: "change-password",
//     text: "Change Password",
//     path: "/settings/change-password",
//   },
// ] as const;

// export const SideBarTabs = ["notes", "archived"];
// export const FooterTabs = ["home", "archived", "tags", "settings"];
// export const SettingsTabs = ["font-theme", "color-theme", "change-password"];

// export type Tab = (typeof tabs)[number];

// export type TabKey = Tab["key"];

// export const tabsMap = Object.fromEntries(
//   tabs.map((tab) => [tab.key, tab])
// ) as Record<Tab["key"], Tab>;
