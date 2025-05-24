import { useState } from "react";

import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  ShowError,
} from "../../../shared/components";

import logo from "../../../assets/logo.svg";

import { useForm } from "../hooks/useForm";
import { validationRules } from "../utils/validation";
import { forgotPassword } from "../services/authService";
import ResendEmail from "../../../shared/components/ResendEmail";

function ForgotPassword() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const { values, errors, handleChange, handleSubmit, loading } = useForm({
    initialValues: { email: "" },
    validationRules,
    onSubmit: (values) =>
      forgotPassword(values, () => {
        setSubmitted(true);
        setRecipient(values.email);
      }),
    component: "forgotPassword",
  });

  const [enableResend, setEnableResend] = useState<boolean>(false);
  const [resendKey, setResendKey] = useState(0);
  const [recipient, setRecipient] = useState("");

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
          Forgotten Your Password?
        </h1>
        {!submitted && (
          <span className="text-secondary-600 text-center">
            Enter your email below, and we'll send you a link to reset your
            password
          </span>
        )}
        {submitted && (
          <ResendEmail
            key={resendKey}
            email={recipient}
            callback={setEnableResend}
          />
        )}
      </div>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
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

        {!submitted && (
          <Button
            type="submit"
            styles="font-bold hover:bg-opacity-95"
            disabled={loading}
          >
            {loading ? "Processing..." : "Send Reset Link"}
          </Button>
        )}
        {submitted && (
          <Button
            type="submit"
            styles={`font-bold hover:bg-opacity-95 ${
              !enableResend ? "bg-gray-300" : ""
            }`}
            disabled={!enableResend}
            onClick={() => setResendKey((prev) => prev + 1)}
          >
            Resend Email
          </Button>
        )}
      </form>
    </div>
  );
}

export default ForgotPassword;
