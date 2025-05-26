import { Button, HorizontalWrapper, Input } from "../../../shared/components";
import { FormWrapper } from "../../../shared/components/FormWrapper";
import SettingsSection from "../components/SettingsSection";

function ChangePassword() {
  return (
    <SettingsSection heading="Change Password">
      <FormWrapper>
        <Input
          type="password"
          placeholder=""
        />
        <Input
          type="password"
          placeholder=""
        />
        <Input
          type="password"
          placeholder=""
        />

        <HorizontalWrapper styles="justify-end">
          <div>
            <Button type="submit">Save Password</Button>
          </div>
        </HorizontalWrapper>
      </FormWrapper>
    </SettingsSection>
  );
}

export default ChangePassword;
