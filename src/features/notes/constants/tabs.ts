// export const tabs = [
//   { key: "allNotes", text: "All Notes", path: "/notes/allnotes" },
//   {
//     key: "archivedNotes",
//     text: "Archived Notes",
//     path: "/notes/archivednotes",
//   },
// ] as const;

// export type Tab = (typeof tabs)[number];

// export type TabKey = Tab["key"];

// export const tabsMap = Object.fromEntries(
//   tabs.map((tab) => [tab.key, tab])
// ) as Record<Tab["key"], Tab>;

export const tabs = [
  { key: "home", text: "All Notes", path: "/notes" },
  { key: "notes", text: "All Notes", path: "/notes/allnotes" },
  //   { key: "search", text: "Search", path: "/notes/search" },
  { key: "archived", text: "Archived Notes", path: "/notes/archived" },
  { key: "tags", text: "Tags", path: "/notes/tags" },
  { key: "settings", text: "Settings", path: "/settings" },

  { key: "color-theme", text: "Color Theme", path: "/settings/color-theme" },
  { key: "font-theme", text: "Font Theme", path: "/settings/font-theme" },
  {
    key: "change-password",
    text: "Change Password",
    path: "/settings/change-password",
  },
] as const;

export const SideBarTabs = ["notes", "archived"];
export const FooterTabs = ["home", "archived", "tags", "settings"];
export const SettingsTabs = ["font-theme", "color-theme", "change-password"];

export type Tab = (typeof tabs)[number];

export type TabKey = Tab["key"];

export const tabsMap = Object.fromEntries(
  tabs.map((tab) => [tab.key, tab])
) as Record<Tab["key"], Tab>;
