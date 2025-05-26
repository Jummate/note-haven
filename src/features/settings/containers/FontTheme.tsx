import {
  Button,
  HorizontalWrapper,
  Input,
  VerticalWrapper,
} from "../../../shared/components";
import SettingsSection from "../components/SettingsSection";

function FontTheme() {
  return (
    <SettingsSection
      heading="Font Theme"
      subHeading="Choose your font theme:"
    >
      <VerticalWrapper>
        <Input type="password" />
        <Input type="password" />
        <Input type="password" />

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
