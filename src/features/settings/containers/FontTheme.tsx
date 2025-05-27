import { useState } from "react";
import {
  Button,
  HorizontalWrapper,
  VerticalWrapper,
} from "../../../shared/components";
import SettingsSection from "../components/SettingsSection";
import PanelItem from "../components/PanelItem";
import { AppIcons } from "../../../shared/icons/Icons";

type FontThemeType = "sans-serif" | "serif" | "monospace" | null;

function FontTheme() {
  const [fontTheme, setFontTheme] = useState<FontThemeType>(null);
  const SansSerif = AppIcons.sansSerif;
  const Serif = AppIcons.serif;
  const Mono = AppIcons.mono;
  return (
    <SettingsSection
      heading="Font Theme"
      subHeading="Choose your font theme:"
    >
      <VerticalWrapper>
        <PanelItem
          icon={SansSerif}
          itemLabel="Sans-serif"
          itemTagLine="Clean and modern, easy to read."
          isActive={fontTheme == "sans-serif"}
          onSelect={() => setFontTheme("sans-serif")}
        />
        <PanelItem
          icon={Serif}
          itemLabel="Serif"
          itemTagLine="Classic and elegant for a timeless feel."
          isActive={fontTheme == "serif"}
          onSelect={() => setFontTheme("serif")}
        />
        <PanelItem
          icon={Mono}
          itemLabel="Mono"
          itemTagLine="Code-like, great for a technical vibe."
          isActive={fontTheme == "monospace"}
          onSelect={() => setFontTheme("monospace")}
        />

        <HorizontalWrapper styles="justify-end">
          <div>
            <Button>Apply Changes</Button>
          </div>
        </HorizontalWrapper>
      </VerticalWrapper>
    </SettingsSection>
  );
}

export default FontTheme;
