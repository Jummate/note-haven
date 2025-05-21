import { lazy } from "react";
import NoteDetailsPage from "./pages/NoteDetailsPage";

const NoteDashboard = lazy(() => import("./pages/NoteDashboard"));
const ArchivedNotesPage = lazy(() => import("./pages/ArchivedNotesPage"));
const CreateNotePage = lazy(() => import("./pages/CreateNotePage"));
const TagsPage = lazy(() => import("../tags/pages/TagsPage"));
// const SearchPage = lazy(() => import("./pages/SearchPage"));
const Settings = lazy(() => import("../settings/pages/Settings"));

export const noteRoutes = [
  {
    path: "notes",
    component: <NoteDashboard />,
  },
  {
    path: "notes/:id/:noteSlug",
    component: <NoteDetailsPage />,
  },
  {
    path: "notes/archived",
    component: <ArchivedNotesPage />,
  },
  {
    path: "notes/archived/:id/:noteSlug",
    component: <ArchivedNotesPage />,
  },
  {
    path: "notes/create",
    component: <CreateNotePage />,
  },
  {
    path: "settings",
    component: <Settings />,
  },
  {
    path: "notes/tags",
    component: <TagsPage />,
  },
  {
    path: "notes/tags/:tagSlug",
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
