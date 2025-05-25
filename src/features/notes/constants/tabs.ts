import { TabFrom, TabKeyFrom } from "../../../shared/utils/createTabMaps";
import { ARCHIVED_URL, NOTES_URL } from "./urls";

export const sideBarTabs = [
  { key: "notes", text: "All Notes", path: NOTES_URL },
  { key: "archived", text: "Archived Notes", path: ARCHIVED_URL },
] as const;

export type SideBarTab = TabFrom<typeof sideBarTabs>;
export type SideBarTabKey = TabKeyFrom<typeof sideBarTabs>;
