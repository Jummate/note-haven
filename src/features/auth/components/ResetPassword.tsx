import React, { useState } from "react";
import {
  Input,
  Button,
  Label,
  VerticalWrapper,
  HorizontalLine,
  HorizontalWrapper,
} from "../../../shared/components";

import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

interface ResetPasswordProps {
  styles?: string;
}

function ResetPassword() {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

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
        action=""
        className="flex flex-col gap-6"
      >
        <VerticalWrapper styles="gap-1">
          <Label>New Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </VerticalWrapper>

        <VerticalWrapper styles="gap-1">
          <Label>Confirm New Password</Label>
          <Input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </VerticalWrapper>

        <Button
          type="submit"
          styles="font-bold hover:bg-opacity-95"
          onClick={() => console.log("Login")}
        >
          Reset Password
        </Button>
        <HorizontalLine />
      </form>
    </div>
  );
}

export default ResetPassword;
