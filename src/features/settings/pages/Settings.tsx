import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import ColorTheme from '../containers/ColorTheme';
import FontTheme from '../containers/FontTheme';
import ChangePassword from '../containers/ChangePassword';
import { settingsTabs } from '../constants/tabs';

import { SettingsLabel } from '../constants/labels';

import { useTabStore } from '../../notes/stores/tabStore';
import SidebarTab from '../../../shared/components/SidebarTab';
import NoteLayout from '../../../shared/layouts/NoteLayout';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import { HorizontalLine, VerticalWrapper } from '../../../shared/components';
import { SETTINGS_URL } from '../constants/urls';
import { logout } from '../../auth/services/authService';

function Settings() {
  const { activeTabs, setActiveTab } = useTabStore();
  const navigate = useNavigate();

  const handleClick = (activeTab: string, path: string | null = null) => {
    setActiveTab('settings', activeTab);
    setActiveTab('footer', SettingsLabel.SETTINGS);
    setActiveTab('sidebar', '');
    // setHeaderText(headerText);
    if (path) {
      navigate(path);
    }
  };

  const location = useLocation();
  const isBaseSettings = location.pathname === SETTINGS_URL;

  return (
    <ResponsiveLayout
      mobile={
        <NoteLayout>
          <div className="p-8 text-default font-inter w-full bg-inverted">
            {isBaseSettings ? (
              <>
                <h1 className="font-bold text-4xl font-inter mb-7">Settings</h1>
                <div className="">
                  {settingsTabs.map(({ icon, label, path }) => {
                    return (
                      <div key={label}>
                        <SidebarTab
                          text={label}
                          icon={icon}
                          isActive={activeTabs.settings == label}
                          onClick={
                            label == SettingsLabel.LOGOUT
                              ? () => logout(navigate)
                              : () => handleClick(label, path)
                          }
                        />
                        {label === SettingsLabel.CHANGE_PASSWORD && (
                          <HorizontalLine styles="my-3" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <Outlet />
            )}
          </div>
        </NoteLayout>
      }
      desktop={
        <DesktopLayout
          firstItem={
            <div className="mb-12">
              {settingsTabs.map(({ icon, label, path }) => {
                return (
                  <div key={label}>
                    <SidebarTab
                      // key={label}
                      text={label}
                      icon={icon}
                      isActive={activeTabs.settings == label}
                      onClick={
                        label == SettingsLabel.LOGOUT
                          ? () => logout(navigate)
                          : () => handleClick(label, path)
                      }
                    />
                    {label === SettingsLabel.CHANGE_PASSWORD && (
                      <HorizontalLine styles="my-3" />
                    )}
                  </div>
                );
              })}
            </div>
          }
          secondItem={
            <VerticalWrapper styles="flex-1">
              <Outlet />
            </VerticalWrapper>
          }
        ></DesktopLayout>
      }
    />
  );
}

Settings.ChangePassword = ChangePassword;
Settings.ColorTheme = ColorTheme;
Settings.FontTheme = FontTheme;

export default Settings;
