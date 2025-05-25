// import { useState } from "react";
// import "./index.css";

import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./features/auth/pages/Login";
import PageNotFound from "./shared/pages/PageNotFound";
import Dashboard from "./layout/DashboardLayout";
import Container from "./shared/components/Container";
import NoteDashboard from "./features/notes/pages/NoteDashboard";
// import ArchivedNotes from "./features/notes/pages/ArchivedNotes";
import { authRoutes } from "./features/auth/routes";
import { noteRoutes } from "./features/notes/routes";
import Settings from "./features/settings/pages/Settings";
import { LOGIN_URL } from "./features/auth/constants/urls";
import { settingsRoutes } from "./features/settings/routes";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <div className="bg-secondary-100 min-h-screen flex items-center justify-center"> */}
          <div className="">
            <Routes>
              <Route
                path={LOGIN_URL}
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
                <Route
                  index
                  element={<NoteDashboard />}
                />

                {noteRoutes.map(({ path, component }) => (
                  <Route
                    key={path}
                    path={path}
                    element={component}
                  />
                ))}
                {/* <Route
                  path="/notes"
                  element={<NoteDashboard />}
                >
                  {noteRoutes.map(({ path, component }) => (
                    <Route
                      key={path}
                      path={path}
                      element={component}
                    />
                  ))}
                </Route> */}

                <Route
                  path="/settings"
                  element={<Settings />}
                >
                  {settingsRoutes.map(({ path, component }) => (
                    <Route
                      key={path}
                      path={path}
                      element={component}
                    />
                  ))}
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
