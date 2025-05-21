import { TabFrom, TabKeyFrom } from "../../../shared/utils/createTabMaps";

export const sideBarTabs = [
  { key: "notes", text: "All Notes", path: "/notes" },
  { key: "archived", text: "Archived Notes", path: "/notes/archived" },
] as const;

export type SideBarTab = TabFrom<typeof sideBarTabs>;
export type SideBarTabKey = TabKeyFrom<typeof sideBarTabs>;
