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

interface SignupProps {
  styles?: string;
}

function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
          Create Your Account
        </h1>
        <span className="text-secondary-600 text-center">
          Sign up to start organizing your notes and boost your productivity
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
        {/* <div className="text-right -mb-7">
          <small className="hover:text-primary-500 cursor-pointer">
            Forgot Password?
          </small>
        </div> */}
        <VerticalWrapper styles="gap-1">
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </VerticalWrapper>

        <Button
          type="submit"
          styles="font-bold hover:bg-opacity-95"
          onClick={() => console.log("Sign up")}
        >
          Sign up
        </Button>
        <HorizontalLine />
      </form>

      <HorizontalWrapper styles="justify-center items-center gap-3">
        <span className="text-secondary-600">Already have an account?</span>
        <Link
          to="/login"
          className="text-secondary-950 cursor-pointer hover:text-primary-500"
        >
          Log in
        </Link>
      </HorizontalWrapper>
    </div>
  );
}

export default Signup;
