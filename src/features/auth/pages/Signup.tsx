import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  HorizontalLine,
  HorizontalWrapper,
  ShowError,
} from "../../../shared/components";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "../hooks/useForm";
import { validationRules } from "../utils/validation";

import { createUser } from "../services/authService";
import AuthLayout from "../layouts/AuthLayout";
import { FormWrapper } from "../../../shared/components/FormWrapper";

function Signup() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, loading } = useForm({
    initialValues: { email: "", password: "", confirmPassword: "" },
    validationRules,
    onSubmit: (values) => createUser(values, navigate),
    component: "signup",
  });

  return (
    <AuthLayout
      heading="Create Your Account"
      firstItem={
        <span className="text-secondary-600 text-center">
          Sign up to start organizing your notes and boost your productivity
        </span>
      }
      secondItem={
        <FormWrapper onSubmit={handleSubmit}>
          <VerticalWrapper styles="gap-1">
            <Label
              htmlFor="email"
              isRequired
            >
              Email
            </Label>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="email@gmail.com"
              styles={errors.email ? "error-border" : ""}
            />
            {errors.email && <ShowError message={errors.email} />}
          </VerticalWrapper>

          <VerticalWrapper styles="gap-1">
            <Label
              htmlFor="password"
              isRequired
            >
              Password
            </Label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              styles={errors.password ? "error-border" : ""}
            />
            {errors.password && <ShowError message={errors.password} />}
          </VerticalWrapper>

          <VerticalWrapper styles="gap-1">
            <Label
              htmlFor="confirmPassword"
              isRequired
            >
              Confirm Password
            </Label>
            <Input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
              styles={errors.confirmPassword ? "error-border" : ""}
            />
            {errors.confirmPassword && (
              <ShowError message={errors.confirmPassword} />
            )}
          </VerticalWrapper>

          <Button
            type="submit"
            disabled={loading}
            styles={`font-bold hover:bg-opacity-95 ${
              loading ? "disabled" : ""
            }`}
          >
            {loading ? "Processing..." : "Sign up"}
          </Button>
          <HorizontalLine />
        </FormWrapper>
      }
    >
      <HorizontalWrapper styles="justify-center items-center gap-3">
        <span className="text-secondary-600">Already have an account?</span>
        <Link
          to="/login"
          className="text-secondary-950 cursor-pointer hover:text-primary-500"
        >
          Log in
        </Link>
      </HorizontalWrapper>
    </AuthLayout>
  );
}

export default Signup;
