// import { useState } from "react";
// import "./index.css";

import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// import Login from './features/auth/pages/Login';
import PageNotFound from './shared/pages/PageNotFound';
import Dashboard from './layout/DashboardLayout';
import Container from './shared/components/Container';
import NoteDashboard from './features/notes/pages/NoteDashboard';
// import ArchivedNotes from "./features/notes/pages/ArchivedNotes";
import { authRoutes } from './features/auth/routes';
import { noteRoutes } from './features/notes/routes';
import Settings from './features/settings/pages/Settings';
// import { LOGIN_URL } from './features/auth/constants/urls';
import { settingsRoutes } from './features/settings/routes';
import { SETTINGS_URL } from './features/settings/constants/urls';
import LandingPage from './shared/pages/LandingPage';
import ProtectedRoute from './shared/pages/ProtectedRoute';
import Modal from './shared/components/Modal';
// import axiosAuth from './shared/services/authenticatedApiClient';
// import useAuthStore from './features/auth/stores/authStore';
// import { API_REFRESH_URL } from './features/auth/constants/urls';
import { AuthProvider } from './features/auth/AuthProvider';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './shared/config/queryClient';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="bg-inverted text-default">
                <Routes>
                  <Route index element={<LandingPage />} />

                  {authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                  ))}

                  {/* Dashboard wrapper for authenticated pages */}
                  <Route element={<Dashboard />}>
                    {/* Notes section */}
                    <Route path="/notes">
                      <Route
                        index
                        element={
                          <ProtectedRoute>
                            <NoteDashboard.WithErrorBoundary />
                          </ProtectedRoute>
                        }
                      />
                      {noteRoutes.map(({ path, component }) => (
                        <Route key={path} path={path} element={component} />
                      ))}
                    </Route>

                    <Route
                      path="/settings"
                      element={
                        <ProtectedRoute>
                          <Settings />
                        </ProtectedRoute>
                      }
                    >
                      <Route index element={<Settings.ColorTheme />} />

                      {settingsRoutes.map(({ path, component }) => {
                        if (path != SETTINGS_URL) {
                          return (
                            <Route key={path} path={path} element={component} />
                          );
                        }
                      })}
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
        </AuthProvider>
      </QueryClientProvider>
      <ToastContainer position="top-center" />
      <Modal />
    </>
  );
}

export default App;
