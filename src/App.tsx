// import { useState } from "react";
// import "./index.css";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./features/auth/pages/Login";
import PageNotFound from "./shared/pages/PageNotFound";
import Dashboard from "./features/notes/components/Dashboard";
import Container from "./shared/components/Container";
import AllNotes from "./features/notes/pages/AllNotes";
import ArchivedNotes from "./features/notes/pages/ArchivedNotes";
import { authRoutes } from "./features/auth/routes";
import { noteRoutes } from "./features/notes/routes";

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
              {authRoutes.map(({ path, component }) => (
                <Route
                  key={path}
                  path={path}
                  element={component}
                />
              ))}

              {/* <Route
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
              /> */}
              {/* <Route
                path="/dashboard/"
                element={<Dashboard />}
              /> */}

              <Route
                path="/notes"
                element={<Dashboard />}
              >
                <Route
                  index
                  element={<AllNotes />}
                />
                {noteRoutes.map(({ path, component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={component}
                  />
                ))}
              </Route>
              <Route
                path="*"
                element={
                  <Container>
                    <PageNotFound />
                  </Container>
                }
              />
            </Routes>
          </div>
        </Suspense>
      </Router>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
