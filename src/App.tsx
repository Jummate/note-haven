// import { useState } from "react";
// import "./index.css";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./features/auth/components/Login";
import PageNotFound from "./features/auth/components/PageNotFound";
import ForgotPassword from "./features/auth/components/ForgotPassword";
import ResetPassword from "./features/auth/components/ResetPassword";
import Dashboard from "./features/notes/components/Dashboard";
import Container from "./shared/components/Container";
const Signup = lazy(() => import("./features/auth/components/Signup"));

// import Signup from "./features/auth/components/Signup";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <div className="bg-secondary-100 min-h-screen flex items-center justify-center"> */}
          <div className="">
            <Routes>
              <Route
                path="/"
                element={
                  <Container>
                    <Login />
                  </Container>
                }
              />
              <Route
                path="/login"
                element={
                  <Container>
                    <Login />
                  </Container>
                }
              />
              <Route
                path="/signup"
                element={
                  <Container>
                    <Signup />
                  </Container>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <Container>
                    <ForgotPassword />
                  </Container>
                }
              />
              <Route
                path="/reset-password/:token"
                element={
                  <Container>
                    <ResetPassword />
                  </Container>
                }
              />
              <Route
                path="/dashboard/"
                element={<Dashboard />}
              />
              <Route
                path="*"
                element={
                  <Container>
                    <PageNotFound />
                  </Container>
                }
              />
            </Routes>
            {/* <Login /> */}
            {/* <Signup /> */}
          </div>
        </Suspense>
      </Router>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
