import { useState } from "react";

import {
  Button,
  HorizontalWrapper,
  VerticalWrapper,
} from "../../../shared/components";
import { AppIcons } from "../../../shared/icons/Icons";
import PanelItem from "../components/PanelItem";
import SettingsSection from "../components/SettingsSection";

type ColorThemeType = "light" | "dark" | "system" | null;

function ColorTheme() {
  const ColorThemeIcon = AppIcons.colorTheme;
  const MoonIcon = AppIcons["moon"];
  const SystemIcon = AppIcons["system"];

  const [colorTheme, setColorTheme] = useState<ColorThemeType>(null);
  // const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <SettingsSection
      heading="Color Theme"
      subHeading="Choose your color theme:"
    >
      <VerticalWrapper>
        <PanelItem
          icon={ColorThemeIcon}
          itemLabel="Light Mode"
          itemTagLine="Pick a clean and classic light theme."
          isActive={colorTheme == "light"}
          onSelect={() => setColorTheme("light")}
        />
        <PanelItem
          icon={MoonIcon}
          itemLabel="Dark Mode"
          itemTagLine="Select a sleek and modern dark theme."
          isActive={colorTheme == "dark"}
          onSelect={() => setColorTheme("dark")}
        />
        <PanelItem
          icon={SystemIcon}
          itemLabel="System"
          itemTagLine="Adapt to your device's theme."
          isActive={colorTheme == "system"}
          onSelect={() => setColorTheme("system")}
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

export default ColorTheme;
