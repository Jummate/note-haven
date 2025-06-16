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
  TAG_DETAILS_URL,
  TAGS_URL,
} from './constants/urls';
import { ErrorFallback } from '../../shared/components/ErrorFallback';
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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <NoteDashboard />
      </ErrorBoundary>
    ),
  },
  {
    path: NOTES_DETAILS_URL,
    component: <NoteDetailsPage.WithErrorBoundary />,
  },
  {
    path: ARCHIVED_URL,
    component: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ArchivedNotesPage />
      </ErrorBoundary>
    ),
  },
  {
    path: ARCHIVED_DETAILS_URL,
    component: <ArchivedNoteDetailsPage />,
  },
  {
    path: CREATE_NOTE_URL,
    component: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <CreateNotePage />
      </ErrorBoundary>
    ),
  },

  {
    path: TAGS_URL,
    component: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TagsPage />
      </ErrorBoundary>
    ),
  },
  {
    path: TAG_DETAILS_URL,
    component: (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TagsPage />
      </ErrorBoundary>
    ),
  },
  // {
  //   path: "search",
  //   component: <SearchPage />,
  // },
];

// export const noteRoutes = [
//   {
//     path: "notes",
//     component: <NoteDashboard />,
//   },
//   {
//     path: ":id/:noteSlug",
//     component: <NoteDetailsPage />,
//   },
//   {
//     path: "archived",
//     component: <ArchivedNotesPage />,
//   },
//   {
//     path: "archived/:id/:noteSlug",
//     component: <ArchivedNotesPage />,
//   },
//   {
//     path: "create",
//     component: <CreateNotePage />,
//   },
//   {
//     path: "settings",
//     component: <Settings />,
//   },
//   {
//     path: "notes/tags",
//     component: <TagsPage />,
//   },
//   // {
//   //   path: "search",
//   //   component: <SearchPage />,
//   // },
// ];
