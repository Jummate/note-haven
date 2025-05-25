import { TabFrom, TabKeyFrom } from "../../shared/utils/createTabMaps";

export const footerTabs = [
  { key: "home", text: "All Notes", path: "/notes" },
  { key: "archived", text: "Archived Notes", path: "/notes/archived" },
  { key: "tags", text: "Tags", path: "/notes/tags" },
  { key: "settings", text: "Settings", path: "/settings" },
] as const;

export type FooterTab = TabFrom<typeof footerTabs>;
export type FooterTabKey = TabKeyFrom<typeof footerTabs>;
