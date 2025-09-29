// import { useState } from 'react';
import {
  Button,
  HorizontalWrapper,
  VerticalWrapper,
} from '../../../shared/components';
import SettingsSection from '../components/SettingsSection';
import PanelItem from '../components/PanelItem';
import { AppIcons } from '../../../shared/icons/Icons';
import useFontTheme from '../../../shared/hooks/useFontTheme';

function FontTheme() {
  const [fontTheme, setFontTheme] = useFontTheme();
  const SansSerif = AppIcons.sansSerif;
  const Serif = AppIcons.serif;
  const Mono = AppIcons.mono;
  return (
    <SettingsSection heading="Font Theme" subHeading="Choose your font theme:">
      <VerticalWrapper>
        <PanelItem
          icon={SansSerif}
          itemLabel="Sans-serif"
          itemTagLine="Clean and modern, easy to read."
          isActive={fontTheme == 'sans'}
          onSelect={() => setFontTheme('sans')}
        />
        <PanelItem
          icon={Serif}
          itemLabel="Serif"
          itemTagLine="Classic and elegant for a timeless feel."
          isActive={fontTheme == 'serif'}
          onSelect={() => setFontTheme('serif')}
        />
        <PanelItem
          icon={Mono}
          itemLabel="Mono"
          itemTagLine="Code-like, great for a technical vibe."
          isActive={fontTheme == 'mono'}
          onSelect={() => setFontTheme('mono')}
        />

        <HorizontalWrapper styles="justify-end">
          <div>
            <Button styles="hover:bg-primary-dark">Apply Changes</Button>
          </div>
        </HorizontalWrapper>
      </VerticalWrapper>
    </SettingsSection>
  );
}

export default FontTheme;
