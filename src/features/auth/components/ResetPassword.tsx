import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  HorizontalLine,
  ShowError,
} from "../../../shared/components";

import logo from "../../../assets/logo.svg";

import { useForm } from "../../../shared/hooks/useForm";
import { validationRules } from "../../../shared/utils/validation";

function ResetPassword() {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: { password: "", confirmPassword: "" },
    validationRules,
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
  });

  return (
    <div className="rounded-xl w-[90%] max-w-2xl flex flex-col gap-6 bg-white p-10 md:p-20 py-32 shadow-all-edges">
      <div className="text-center mb-5">
        <VerticalWrapper styles="items-center">
          <img
            src={logo}
            alt=""
          />
        </VerticalWrapper>
        {/* <span className="font-pacifico text-6xl font-medium">notes haven</span> */}
      </div>

      <div className="flex flex-col gap-2 items-center justify-center mb-10">
        <h1 className="text-3xl mb-3 text-secondary-950 font-bold">
          Reset Your Password
        </h1>
        <span className="text-secondary-600 text-center">
          Choose a new password to secure your account.
        </span>
      </div>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <VerticalWrapper styles="gap-1">
          <Label
            htmlFor="password"
            isRequired
          >
            New Password
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
            Confirm New Password
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
          styles="font-bold hover:bg-opacity-95"
        >
          Reset Password
        </Button>
        <HorizontalLine />
      </form>
    </div>
  );
}

export default ResetPassword;
