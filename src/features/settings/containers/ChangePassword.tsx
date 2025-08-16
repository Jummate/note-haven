import {
  Button,
  HorizontalWrapper,
  Input,
  Label,
  ShowError,
  VerticalWrapper,
} from '../../../shared/components';
import { FormWrapper } from '../../../shared/components/FormWrapper';
import { useForm } from '../../auth/hooks/useForm';
import SettingsSection from '../components/SettingsSection';
import { validationRules } from '../../auth/utils/validation';
import { changePassword } from '../../auth/services/authService';
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, loading } = useForm({
    initialValues: { oldPassword: '', newPassword: '', confirmNewPassword: '' },
    validationRules,
    // onSubmit: _ => {
    //   //this is just a placeholder body of the function just to prevent a linting error. It will be removed later
    //   return Promise.resolve({ success: true });
    // },
    onSubmit: values => changePassword(values, navigate),
    component: 'changePassword',
  });

  return (
    <SettingsSection heading="Change Password">
      <FormWrapper onSubmit={handleSubmit} aria-busy={loading}>
        <VerticalWrapper styles="gap-1">
          <Label htmlFor="oldPassword" styles="font-semibold" isRequired>
            Old Password
          </Label>
          <Input
            type="password"
            name="oldPassword"
            id="oldPassword"
            onChange={handleChange}
            value={values.oldPassword}
            styles={errors.oldPassword ? 'error-border' : ''}
            aria-describedby={
              errors.oldPassword ? 'oldPassword-error' : undefined
            }
            aria-invalid={errors.oldPassword ? 'true' : 'false'}
          />
          {errors.oldPassword && (
            <ShowError message={errors.oldPassword} id="oldPassword-error" />
          )}
        </VerticalWrapper>

        <VerticalWrapper styles="gap-1">
          <Label htmlFor="newPassword" styles="font-semibold" isRequired>
            New Password
          </Label>
          <Input
            type="password"
            name="newPassword"
            id="newPassword"
            onChange={handleChange}
            value={values.newPassword}
            styles={errors.newPassword ? 'error-border' : ''}
            aria-describedby={
              errors.newPassword ? 'newPassword-error' : undefined
            }
            aria-invalid={errors.newPassword ? 'true' : 'false'}
          />
          {errors.newPassword && (
            <ShowError message={errors.newPassword} id="newPassword-error" />
          )}
        </VerticalWrapper>

        <VerticalWrapper styles="gap-1">
          <Label htmlFor="confirmNewPassword" styles="font-semibold" isRequired>
            Confirm New Password
          </Label>
          <Input
            type="password"
            name="confirmNewPassword"
            id="confirmNewPassword"
            onChange={handleChange}
            value={values.confirmNewPassword}
            styles={errors.confirmNewPassword ? 'error-border' : ''}
            aria-describedby={
              errors.confirmNewPassword ? 'confirmNewPassword-error' : undefined
            }
            aria-invalid={errors.confirmNewPassword ? 'true' : 'false'}
          />
          {errors.confirmNewPassword && (
            <ShowError
              message={errors.confirmNewPassword}
              id="confirmNewPassword-error"
            />
          )}
        </VerticalWrapper>

        <HorizontalWrapper styles="justify-end">
          <div>
            <Button
              type="submit"
              styles="font-bold hover:bg-opacity-95"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Save Password'}
            </Button>
          </div>
        </HorizontalWrapper>
      </FormWrapper>
    </SettingsSection>
  );
}

export default ChangePassword;
