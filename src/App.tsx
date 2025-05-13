// import { useState } from "react";
// import "./index.css";

import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./features/auth/pages/Login";
import PageNotFound from "./shared/pages/PageNotFound";
import Dashboard from "./features/notes/layouts/DashboardLayout";
import Container from "./shared/components/Container";
import AllNotes from "./features/notes/pages/NoteDashboard";
// import ArchivedNotes from "./features/notes/pages/ArchivedNotes";
import { authRoutes } from "./features/auth/routes";
import { noteRoutes } from "./features/notes/routes";
import Settings from "./features/notes/pages/Settings";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <div className="bg-secondary-100 min-h-screen flex items-center justify-center"> */}
          <div className="">
            <Routes>
              <Route
                path="/login"
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
                path="/"
                element={<Dashboard />}
              >
                {/* <Route
                  index
                  element={<AllNotes />}
                /> */}
                {/* <Route path="archived" element/> */}
                <Route
                  path="/notes"
                  element={<AllNotes />}
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
                  path="/settings"
                  element={<Settings />}
                >
                  <Route
                    path="color-theme"
                    element={<Settings.ColorTheme />}
                  />
                  <Route
                    path="font-theme"
                    element={<Settings.FontTheme />}
                  />
                  <Route
                    path="change-password"
                    element={<Settings.ChangePassword />}
                  />
                </Route>
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
