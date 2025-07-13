import {
  CHANGE_PASSWORD_URL,
  COLOR_THEME_URL,
  FONT_THEME_URL,
} from './constants/urls';
import Settings from './pages/Settings';
import ProtectedRoute from '../../shared/pages/ProtectedRoute';

export const settingsRoutes = [
  {
    path: COLOR_THEME_URL,
    component: (
      <ProtectedRoute>
        <Settings.ColorTheme />
      </ProtectedRoute>
    ),
  },
  {
    path: FONT_THEME_URL,
    component: (
      <ProtectedRoute>
        <Settings.FontTheme />
      </ProtectedRoute>
    ),
  },
  {
    path: CHANGE_PASSWORD_URL,
    component: (
      <ProtectedRoute>
        <Settings.ChangePassword />
      </ProtectedRoute>
    ),
  },
];
