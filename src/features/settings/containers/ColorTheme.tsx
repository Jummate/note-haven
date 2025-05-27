import {
  Button,
  HorizontalWrapper,
  VerticalWrapper,
} from "../../../shared/components";
import PanelItem from "../components/PanelItem";
import SettingsSection from "../components/SettingsSection";

function ColorTheme() {
  return (
    <SettingsSection
      heading="Font Theme"
      subHeading="Choose your color theme:"
    >
      <VerticalWrapper>
       <PanelItem />

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

