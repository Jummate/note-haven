import { SidebarLabels } from '../../features/notes/constants/labels';
import {
  ARCHIVED_URL,
  NOTES_URL,
  TAGS_URL,
} from '../../features/notes/constants/urls';
import { SettingsLabel } from '../../features/settings/constants/labels';
import { SETTINGS_URL } from '../../features/settings/constants/urls';
import { AppIcons } from '../../shared/icons/Icons';
// import { TabFrom, TabKeyFrom } from "../../shared/utils/createTabMaps";

export const footerTabs = [
  { icon: AppIcons.home, label: SidebarLabels.ALL_NOTES, path: NOTES_URL },
  {
    icon: AppIcons.archived,
    label: SidebarLabels.ARCHIVED_NOTES,
    path: ARCHIVED_URL,
  },
  { icon: AppIcons.tags, label: 'Tags', path: TAGS_URL },
  {
    icon: AppIcons.settings,
    label: SettingsLabel.SETTINGS,
    path: SETTINGS_URL,
  },
] as const;

// export type FooterTab = TabFrom<typeof footerTabs>;
// export type FooterTabKey = TabKeyFrom<typeof footerTabs>;
