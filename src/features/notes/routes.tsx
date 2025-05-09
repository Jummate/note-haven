import { lazy } from "react";

const AllNotes = lazy(() => import("./pages/AllNotes"));
const ArchivedNotes = lazy(() => import("./pages/ArchivedNotes"));

export const noteRoutes = [
  {
    path: "allnotes",
    component: <AllNotes />,
  },
  {
    path: "archivednotes",
    component: <ArchivedNotes />,
  },
];
