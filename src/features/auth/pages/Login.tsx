import { Link, useNavigate } from "react-router-dom";

import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  HorizontalLine,
  HorizontalWrapper,
  ShowError,
} from "../../../shared/components";

import { useForm } from "../hooks/useForm";
import { validationRules } from "../utils/validation";
import { login } from "../services/authService";
import AuthLayout from "../layouts/AuthLayout";
import { FormWrapper } from "../../../shared/components/FormWrapper";

function Login() {
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, loading } = useForm({
    initialValues: { email: "", password: "" },
    validationRules,
    onSubmit: (values) => login(values, navigate),
    component: "login",
  });

  return (
    <AuthLayout
      heading=" Welcome to Note Haven"
      firstItem={
        <span className="text-secondary-600 text-center">
          Please log in to continue
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
          <Link
            to="/forgot-password"
            className="hover:text-primary-500 cursor-pointer -mb-7 self-end"
          >
            <small>Forgot Password?</small>
          </Link>
          {/* <div className="text-right -mb-7">
        </div> */}
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

          <Button
            type="submit"
            styles="font-bold hover:bg-opacity-95"
            disabled={loading}
          >
            {loading ? "Processing..." : "Login"}
          </Button>
          <HorizontalLine />
        </FormWrapper>
      }
    >
      <HorizontalWrapper styles="justify-center items-center gap-3">
        <span className="text-secondary-600">Not have an account yet?</span>
        <Link
          to="/signup"
          className="text-secondary-950 cursor-pointer hover:text-primary-500"
        >
          Sign Up
        </Link>
      </HorizontalWrapper>
    </AuthLayout>
  );
}

export default Login;
