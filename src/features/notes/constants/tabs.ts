import { AppIcons } from "../../../shared/icons/Icons";
// import { TabFrom, TabKeyFrom } from "../../../shared/utils/createTabMaps";
import { SidebarLabels } from "./labels";
import { ARCHIVED_URL, NOTES_URL } from "./urls";

export const sideBarTabs = [
  { icon: AppIcons.notes, label: SidebarLabels.ALL_NOTES, path: NOTES_URL },
  {
    icon: AppIcons.archived,
    label: SidebarLabels.ARCHIVED_NOTES,
    path: ARCHIVED_URL,
  },
] as const;

// export type SideBarTab = TabFrom<typeof sideBarTabs>;
// export type SideBarTabKey = TabKeyFrom<typeof sideBarTabs>;
