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

interface LoginProps {
  styles?: string;
}

function Login() {
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
          Welcome to Note Haven
        </h1>
        <span className="text-secondary-600 text-center">
          Please log in to continue
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
        <Link
          to="/forgot-password"
          className="hover:text-primary-500 cursor-pointer -mb-7 self-end"
        >
          <small>Forgot Password?</small>
        </Link>
        {/* <div className="text-right -mb-7">
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
          onClick={() => console.log("Login")}
        >
          Login
        </Button>
        <HorizontalLine />
      </form>

      <HorizontalWrapper styles="justify-center items-center gap-3">
        <span className="text-secondary-600">Not have an account yet?</span>
        <Link
          to="/signup"
          className="text-secondary-950 cursor-pointer hover:text-primary-500"
        >
          Sign Up
        </Link>
      </HorizontalWrapper>
    </div>
  );
}

export default Login;
