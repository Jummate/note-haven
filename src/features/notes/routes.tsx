import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import NoteDetailsPage from './pages/NoteDetailsPage';
import {
  ARCHIVED_DETAILS_URL,
  ARCHIVED_URL,
  CREATE_NOTE_URL,
  NOTES_DETAILS_URL,
  NOTES_URL,
  SEARCH_URL,
  TAG_DETAILS_URL,
  TAGS_URL,
} from './constants/urls';
import { ErrorFallback } from '../../shared/components/ErrorFallback';
import ProtectedRoute from '../../shared/pages/ProtectedRoute';
const NoteDashboard = lazy(() => import('./pages/NoteDashboard'));
const ArchivedNotesPage = lazy(() => import('./pages/ArchivedNotesPage'));
const ArchivedNoteDetailsPage = lazy(
  () => import('./pages/ArchivedNoteDetailsPage'),
);
const CreateNotePage = lazy(() => import('./pages/CreateNotePage'));
const TagsPage = lazy(() => import('../tags/pages/TagsPage'));

// const SearchPage = lazy(() => import("./pages/SearchPage"));

export const noteRoutes = [
  {
    path: NOTES_URL,
    component: (
      <ProtectedRoute>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <NoteDashboard />
        </ErrorBoundary>
      </ProtectedRoute>
    ),
  },
  {
    path: NOTES_DETAILS_URL,
    component: (
      <ProtectedRoute>
        <NoteDetailsPage.WithErrorBoundary />
      </ProtectedRoute>
    ),
  },
  {
    path: ARCHIVED_URL,
    component: (
      <ProtectedRoute>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ArchivedNotesPage />
        </ErrorBoundary>
      </ProtectedRoute>
    ),
  },
  {
    path: ARCHIVED_DETAILS_URL,
    component: (
      <ProtectedRoute>
        <ArchivedNoteDetailsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: CREATE_NOTE_URL,
    component: (
      <ProtectedRoute>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CreateNotePage />
        </ErrorBoundary>
      </ProtectedRoute>
    ),
  },

  {
    path: TAGS_URL,
    component: (
      <ProtectedRoute>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TagsPage />
        </ErrorBoundary>
      </ProtectedRoute>
    ),
  },
  {
    path: TAG_DETAILS_URL,
    component: (
      <ProtectedRoute>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TagsPage />
        </ErrorBoundary>
      </ProtectedRoute>
    ),
  },
  {
    path: SEARCH_URL,
    component: (
      <ProtectedRoute>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <NoteDashboard />
        </ErrorBoundary>
      </ProtectedRoute>
    ),
  },
];
