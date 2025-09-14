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
import { login } from '../services/authService';
import AuthLayout from '../layouts/AuthLayout';
import { FormWrapper } from '../../../shared/components/FormWrapper';
import { FORGOT_PASSWORD_URL, SIGNUP_URL } from '../constants/urls';

function Login() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, loading } = useForm({
    initialValues: { email: '', password: '' },
    validationRules,
    onSubmit: values => login(values, navigate),
    component: 'login',
  });

  return (
    <AuthLayout
      heading="Welcome to Note Haven"
      firstItem={
        <span className="text-dim text-center">Please log in to continue</span>
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
          <Link
            to={`${FORGOT_PASSWORD_URL}`}
            className="link-primary cursor-pointer -mb-7 self-end"
          >
            <small className="text-dim hover:text-primary underline">
              Forgot Password?
            </small>
          </Link>
          {/* <div className="text-right -mb-7">
        </div> */}
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
              <ShowError message={errors.password} id="email-error" />
            )}
          </VerticalWrapper>

          <Button
            type="submit"
            disabled={loading}
            styles={`font-bold hover:bg-primary-dark ${loading ? 'disabled' : ''}`}
          >
            {loading ? 'Processing...' : 'Login'}
          </Button>
          <HorizontalLine />
        </FormWrapper>
      }
    >
      <HorizontalWrapper styles="justify-center items-center gap-3">
        <span className="text-dim">Not have an account yet?</span>
        <Link
          to={SIGNUP_URL}
          className="hover:text-primary text-default font-medium cursor-pointer"
        >
          Sign Up
        </Link>
      </HorizontalWrapper>
    </AuthLayout>
  );
}

export default Login;
