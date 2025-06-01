import { useNavigate, useParams, Navigate } from 'react-router-dom';

import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  HorizontalLine,
  ShowError,
} from '../../../shared/components';
import { useForm } from '../hooks/useForm';
import { validationRules } from '../utils/validation';
import { resetPassword } from '../services/authService';
import AuthLayout from '../layouts/AuthLayout';
import { FormWrapper } from '../../../shared/components/FormWrapper';
import { PAGE_NOT_FOUND_URL } from '../../../shared/constants/urls';

function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();
  const { values, errors, handleChange, handleSubmit, loading } = useForm({
    initialValues: {
      password: '',
      confirmPassword: '',
      token: token || '',
    },
    validationRules,
    onSubmit: values => resetPassword(values, navigate),
  });

  if (!token) return <Navigate to={PAGE_NOT_FOUND_URL} replace />;

  return (
    <AuthLayout
      heading="Reset Your Password"
      firstItem={
        <span className="text-secondary-600 text-center">
          Choose a new password to secure your account.
        </span>
      }
      secondItem={
        <FormWrapper onSubmit={handleSubmit} aria-busy={loading}>
          {loading && (
            <p role="status" aria-live="polite" className="sr-only">
              Processing your request...
            </p>
          )}
          <VerticalWrapper styles="gap-1">
            <Label htmlFor="password" isRequired>
              New Password
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
              styles={errors.password ? 'error-border' : ''}
              aria-describedby={errors.password ? 'password-error' : undefined}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <ShowError message={errors.password} id="password-error" />
            )}
          </VerticalWrapper>

          <VerticalWrapper styles="gap-1">
            <Label htmlFor="confirmPassword" isRequired>
              Confirm New Password
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
              styles={errors.confirmPassword ? 'error-border' : ''}
              aria-describedby={
                errors.confirmPassword ? 'confirmPassword-error' : undefined
              }
              aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            />
            {errors.confirmPassword && (
              <ShowError
                message={errors.confirmPassword}
                id="confirmPassword-error"
              />
            )}
          </VerticalWrapper>

          <Button
            type="submit"
            styles="font-bold hover:bg-opacity-95"
            disabled={loading}
          >
            {loading ? 'Processing' : 'Reset Password'}
          </Button>
          <HorizontalLine />
        </FormWrapper>
      }
    />
  );
}

export default ResetPassword;
