import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

import { useHeaderStore } from '../../features/notes/stores/headerStore';
import {
  TabKeysBySection,
  useTabStore,
} from '../../features/notes/stores/tabStore';
// import { SettingsTabKey } from "../../features/settings/constants/tabs";
// import { FooterTabKey } from "../../layout/constants/tabs";

export function useNavigateWithUIState() {
  const navigate = useNavigate();
  const setActiveTab = useTabStore(state => state.setActiveTab);
  const setHeaderText = useHeaderStore(state => state.setHeaderText);

  const goToPage = useCallback(
    ({
      section,
      tab,
      header,
      path,
    }: {
      section: keyof TabKeysBySection;
      tab: string;
      header: string;
      path: string;
    }) => {
      setActiveTab(section, tab);
      setHeaderText(header);
      navigate(path);
    },
    [navigate, setActiveTab, setHeaderText],
  );

  return goToPage;
}
