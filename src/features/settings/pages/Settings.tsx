import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// import MobileLayout from '../layouts/MobileLayout';
// import NoteLayout from '../layouts/NoteLayout';
// import DesktopLayout from '../layouts/DesktopLayout';

import ColorTheme from '../containers/ColorTheme';
import FontTheme from '../containers/FontTheme';
import ChangePassword from '../containers/ChangePassword';
import { settingsTabs } from '../constants/tabs';
// import { settingsTabs, SettingsTabKey } from "../constants/tabs";
// import SidebarTab from "../components/SidebarTab";
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

  // const handleClick = (activeTab: SettingsTabKey, path: string = "") => {
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
          <div className="p-8 text-secondary-900 font-inter w-full bg-white">
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
                {/* <SidebarTab
                  text={SettingsLabel.LOGOUT}
                  icon={AppIcons.logout}
                  isActive={activeTabs.settings == SettingsLabel.LOGOUT}
                  onClick={() => handleClick(LOGOUT_URL)}
                /> */}
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
            // <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">

            // </div>
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
                  // <SidebarTab
                  //   key={label}
                  //   text={label}
                  //   icon={icon}
                  //   isActive={activeTabs.settings == label}
                  //   onClick={() => handleClick(label, path)}
                  // />
                );
              })}
              {/* <HorizontalLine styles="my-2" />
              <SidebarTab
                text={SettingsLabel.LOGOUT}
                icon={AppIcons.logout}
                isActive={activeTabs.settings == SettingsLabel.LOGOUT}
                onClick={() => handleClick(SettingsLabel.LOGOUT)}
              /> */}
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

  // return (
  //   <>
  //     <div className="hidden lg:grid grid-cols-[1fr_2fr] flex-1">
  //       <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">
  //         <div className="mb-12">
  //           {settingsTabs.map(({ key, text, path }) => {
  //             return (
  //               <SidebarTab
  //                 key={key}
  //                 text={text}
  //                 icon={AppIcons[key]}
  //                 isActive={activeTabs.settings == key}
  //                 onClick={() => handleClick(key, path)}
  //               />
  //             );
  //           })}
  //         </div>
  //       </div>
  //       {/* <div>Show content here</div> */}
  //       <Outlet />
  //     </div>

  //     <div className="flex flex-col flex-1 lg:hidden bg-secondary-100">
  //       <div className="p-8">
  //         <div className="">
  //           <img
  //             src={logo}
  //             alt=""
  //           />
  //         </div>
  //       </div>
  //       <div className="flex flex-1 justify-center">
  //         <div className="p-8 text-secondary-900 font-inter w-full bg-white">
  //           <h1 className="font-bold text-4xl font-inter mb-4">
  //             Settings Mobile
  //           </h1>
  //           <div className="mb-12">
  //             {settingsTabs.map(({ key, text, path }) => {
  //               return (
  //                 <SidebarTab
  //                   key={key}
  //                   text={text}
  //                   icon={AppIcons[key]}
  //                   isActive={activeTabs.settings == key}
  //                   onClick={() => handleClick(key, path)}
  //                 />
  //               );
  //             })}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}

Settings.ChangePassword = ChangePassword;
Settings.ColorTheme = ColorTheme;
Settings.FontTheme = FontTheme;

export default Settings;
