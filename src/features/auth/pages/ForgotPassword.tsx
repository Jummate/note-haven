import { useEffect, useRef, useState } from "react";

import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  ShowError,
} from "../../../shared/components";
import { useForm } from "../hooks/useForm";
import { validationRules } from "../utils/validation";
import { forgotPassword } from "../services/authService";
import ResendEmail from "../../../shared/components/ResendEmail";
import AuthLayout from "../layouts/AuthLayout";
import { FormWrapper } from "../../../shared/components/FormWrapper";

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
  const resendBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (submitted && resendBtnRef.current) {
      resendBtnRef.current.focus();
    }
  }, [submitted]);

  return (
    <AuthLayout
      heading="Forgotten Your Password?"
      firstItem={
        <>
          {submitted ? (
            <ResendEmail
              key={resendKey}
              email={recipient}
              callback={setEnableResend}
            />
          ) : (
            <span className="text-secondary-600 text-center">
              Enter your email below, and we'll send you a link to reset your
              password
            </span>
          )}
        </>
      }
      secondItem={
        <FormWrapper
          onSubmit={handleSubmit}
          aria-busy={loading}
        >
          {loading && (
            <p
              role="status"
              aria-live="polite"
              className="sr-only"
            >
              Processing your request...
            </p>
          )}

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
              id="email"
              onChange={handleChange}
              value={values.email}
              placeholder="email@gmail.com"
              styles={errors.email ? "error-border" : ""}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <ShowError
                message={errors.email}
                id="email-error"
              />
            )}
          </VerticalWrapper>

          {submitted ? (
            <Button
              type="submit"
              styles={`font-bold hover:bg-opacity-95 ${
                !enableResend ? "bg-gray-300" : ""
              }`}
              disabled={!enableResend}
              onClick={() => setResendKey((prev) => prev + 1)}
              ref={resendBtnRef}
            >
              Resend Email
            </Button>
          ) : (
            <Button
              type="submit"
              styles="font-bold hover:bg-opacity-95"
              disabled={loading}
            >
              {loading ? "Processing..." : "Send Reset Link"}
            </Button>
          )}
        </FormWrapper>
      }
    />
  );
}

export default ForgotPassword;
