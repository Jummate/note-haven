import { useState } from "react";
import {
  Input,
  Button,
  Label,
  VerticalWrapper,
} from "../../../shared/components";

import logo from "../../../assets/logo.svg";

interface ForgotPasswordProps {
  styles?: string;
}

function ForgotPassword() {
  const [email, setEmail] = useState<string>("");

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
          Welcome to Note Haven
        </h1>
        <span className="text-secondary-600 text-center">
          Enter your email below, and we'll send you a link to reset your
          password
        </span>
      </div>
      <form
        action=""
        className="flex flex-col gap-6"
      >
        <VerticalWrapper styles="gap-1">
          <Label>Email</Label>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email@gmail.com"
          />
        </VerticalWrapper>

        <Button
          type="submit"
          styles="font-bold hover:bg-opacity-95"
          onClick={() => console.log("Login")}
        >
          Send Reset Link
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;
