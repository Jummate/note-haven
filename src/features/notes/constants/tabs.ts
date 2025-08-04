import { AppIcons } from '../../../shared/icons/Icons';
import { SidebarLabels } from './labels';
import { ARCHIVED_URL, NOTES_URL } from './urls';

export const sideBarTabs = [
  { icon: AppIcons.notes, label: SidebarLabels.ALL_NOTES, path: NOTES_URL },
  {
    icon: AppIcons.archived,
    label: SidebarLabels.ARCHIVED_NOTES,
    path: ARCHIVED_URL,
  },
] as const;
