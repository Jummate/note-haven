import { AppIcons } from '../../../shared/icons/Icons';
import { SettingsLabel } from './labels';
import { CHANGE_PASSWORD_URL, COLOR_THEME_URL, FONT_THEME_URL } from './urls';

export const settingsTabs = [
  {
    icon: AppIcons.colorTheme,
    label: SettingsLabel.COLOR_THEME,
    path: COLOR_THEME_URL,
  },
  {
    icon: AppIcons.fontTheme,
    label: SettingsLabel.FONT_THEME,
    path: FONT_THEME_URL,
  },
  {
    icon: AppIcons.changePasswordIcon,
    label: SettingsLabel.CHANGE_PASSWORD,
    path: CHANGE_PASSWORD_URL,
  },
  {
    icon: AppIcons.logout,
    label: SettingsLabel.LOGOUT,
    path: null,
  },
] as const;
