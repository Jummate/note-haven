// import { useState } from "react";
// import "./index.css";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./features/auth/components/Login";
import PageNotFound from "./features/auth/components/PageNotFound";
import ForgotPassword from "./features/auth/components/ForgotPassword";
import ResetPassword from "./features/auth/components/ResetPassword";
import Dashboard from "./features/notes/Dashboard";
const Signup = lazy(() => import("./features/auth/components/Signup"));

// import Signup from "./features/auth/components/Signup";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="bg-secondary-100 min-h-screen flex items-center justify-center">
            <Routes>
              <Route
                path="/"
                element={<Login />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />
              <Route
                path="/dashboard/"
                element={<Dashboard />}
              />
              <Route
                path="*"
                element={<PageNotFound />}
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
