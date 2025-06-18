import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../shared/components';
// import { useTabStore } from "../stores/tabStore";
// import { tabsMap } from "../constants/tabs";
import PageHeader from '../features/notes/shared/components/PageHeader';
import { useHeaderStore } from '../features/notes/stores/headerStore';
import { AppIcons } from '../shared/icons/Icons';
import { useTabStore } from '../features/notes/stores/tabStore';
import { SettingsLabel } from '../features/settings/constants/labels';
import { SETTINGS_URL } from '../features/settings/constants/urls';
import { PopulatedNote } from '../features/notes/types';
import { useNotes } from '../features/notes/hooks/useNotes';
import { useNoteStore } from '../features/notes/stores/noteStore';
import { SidebarLabels } from '../features/notes/constants/labels';

function Header() {
  const { setActiveTab } = useTabStore();
  const { headerText, setHeaderText } = useHeaderStore();

  const activeNotes = useNotes({ type: 'active' }) as PopulatedNote[];

  const { setFilteredNotes, setFilterQuery, filterQuery } = useNoteStore();

  const navigate = useNavigate();

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
    setFilterQuery(input);
    if (!input) {
      setHeaderText(SidebarLabels.ALL_NOTES);
      // setFilteredNotes(activeNotes);
    } else {
      setHeaderText(`Showing results for: ${input}`);
      const data = activeNotes.filter(
        note =>
          note.title.toLowerCase().includes(input.toLowerCase()) ||
          note.content.toLowerCase().includes(input.toLowerCase()),
      );

      setFilteredNotes(data);
    }
  }

  return (
    <div>
      <div className="px-8 py-12 border border-b-1 border-x-0 flex items-center">
        <div className="flex justify-between items-center flex-1">
          <PageHeader headerText={headerText} />
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
