export const tabs = [
  { key: "allNotes", text: "All Notes", path: "/notes/allnotes" },
  {
    key: "archivedNotes",
    text: "Archived Notes",
    path: "/notes/archivednotes",
  },
] as const;

export type Tab = (typeof tabs)[number];

export type TabKey = Tab["key"];

export const tabsMap = Object.fromEntries(
  tabs.map((tab) => [tab.key, tab])
) as Record<Tab["key"], Tab>;
