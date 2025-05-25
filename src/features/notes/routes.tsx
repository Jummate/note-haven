import { lazy } from "react";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import {
  ARCHIVED_DETAILS_URL,
  ARCHIVED_URL,
  CREATE_NOTE_URL,
  NOTES_DETAILS_URL,
  NOTES_URL,
  TAG_DETAILS_URL,
  TAGS_URL,
} from "./constants/urls";
const NoteDashboard = lazy(() => import("./pages/NoteDashboard"));
const ArchivedNotesPage = lazy(() => import("./pages/ArchivedNotesPage"));
const CreateNotePage = lazy(() => import("./pages/CreateNotePage"));
const TagsPage = lazy(() => import("../tags/pages/TagsPage"));
// const SearchPage = lazy(() => import("./pages/SearchPage"));

export const noteRoutes = [
  {
    path: NOTES_URL,
    component: <NoteDashboard />,
  },
  {
    path: NOTES_DETAILS_URL,
    component: <NoteDetailsPage />,
  },
  {
    path: ARCHIVED_URL,
    component: <ArchivedNotesPage />,
  },
  {
    path: ARCHIVED_DETAILS_URL,
    component: <ArchivedNotesPage />,
  },
  {
    path: CREATE_NOTE_URL,
    component: <CreateNotePage />,
  },

  {
    path: TAGS_URL,
    component: <TagsPage />,
  },
  {
    path: TAG_DETAILS_URL,
    component: <TagsPage />,
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
