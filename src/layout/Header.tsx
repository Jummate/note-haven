import { ChangeEvent } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import { Input } from '../shared/components';

import PageHeader from '../features/notes/shared/components/PageHeader';
import { useHeaderStore } from '../features/notes/stores/headerStore';
import { AppIcons } from '../shared/icons/Icons';
import { useTabStore } from '../features/notes/stores/tabStore';
import { SettingsLabel } from '../features/settings/constants/labels';
import { SETTINGS_URL } from '../features/settings/constants/urls';
import { SidebarLabels } from '../features/notes/constants/labels';
import { NOTES_URL } from '../features/notes/constants/urls';

function Header() {
  const { setActiveTab } = useTabStore();
  const { headerText, setHeaderText } = useHeaderStore();

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const filterQuery = searchParams.get('search') || '';
  const modifiedHeaderText = filterQuery
    ? `Showing results for ${filterQuery}`
    : headerText;

  const SettingsIcon = AppIcons['settings'];

  function handleClick() {
    setActiveTab('sidebar', '');
    setActiveTab('footer', SettingsLabel.SETTINGS);
    setActiveTab('settings', SettingsLabel.COLOR_THEME);
    setHeaderText('Settings');
    navigate(SETTINGS_URL);
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    if (input) {
      setSearchParams({ search: input });
    } else {
      setSearchParams({});
    }

    if (location.pathname !== NOTES_URL) {
      setActiveTab('sidebar', '');
      setActiveTab('footer', '');
      setActiveTab('settings', '');
      setHeaderText(SidebarLabels.ALL_NOTES.toString());
      if (input) navigate(`${NOTES_URL}?search=${encodeURIComponent(input)}`);
    }
  }

  return (
    <div>
      <div className="px-8 py-12 border border-b-1 border-x-0 flex items-center">
        <div className="flex justify-between items-center flex-1">
          <PageHeader headerText={modifiedHeaderText} />
          <div className="flex justify-center items-center gap-8 w-[35%]">
            <Input
              name="search"
              type="search"
              value={filterQuery}
              onChange={handleSearch}
              styles="py-3 text-2xl"
            />
            <button type="button" aria-label="Setting Icon">
              <SettingsIcon
                className="text-4xl text-secondary-500 cursor-pointer hover:text-primary-500/80"
                onClick={handleClick}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
