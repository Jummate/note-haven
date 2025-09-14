import { Link, useNavigate } from 'react-router-dom';

import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  HorizontalLine,
  HorizontalWrapper,
  ShowError,
} from '../../../shared/components';
import { useForm } from '../hooks/useForm';
import { validationRules } from '../utils/validation';

import { createUser } from '../services/authService';
import AuthLayout from '../layouts/AuthLayout';
import { FormWrapper } from '../../../shared/components/FormWrapper';
import { LOGIN_URL } from '../constants/urls';

function Signup() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, loading } = useForm({
    initialValues: { email: '', password: '', confirmPassword: '' },
    validationRules,
    onSubmit: values => createUser(values, navigate),
    component: 'signup',
  });

  return (
    <AuthLayout
      heading="Create Your Account"
      firstItem={
        <span className="text-dim text-center">
          Sign up to start organizing your notes and boost your productivity
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
            <Label htmlFor="email" isRequired>
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={values.email}
              placeholder="email@gmail.com"
              styles={errors.email ? 'error-border' : ''}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <ShowError message={errors.email} id="email-error" />
            )}
          </VerticalWrapper>

          <VerticalWrapper styles="gap-1">
            <Label htmlFor="password" isRequired>
              Password
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
            disabled={loading}
            styles={`font-bold hover:bg-primary-dark ${loading ? 'disabled' : ''}`}
          >
            {loading ? 'Processing...' : 'Sign up'}
          </Button>
          <HorizontalLine />
        </FormWrapper>
      }
    >
      <HorizontalWrapper styles="justify-center items-center gap-3">
        <span className="text-dim">Already have an account?</span>
        <Link
          to={LOGIN_URL}
          className="cursor-pointer hover:text-primary text-default font-medium"
        >
          Log in
        </Link>
      </HorizontalWrapper>
    </AuthLayout>
  );
}

export default Signup;
