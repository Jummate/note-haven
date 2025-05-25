// // import React from "react";
// import { AppIcons } from "../../../shared/icons/Icons";
// import { useNavigate } from "react-router-dom";

// function FloatingCreateNoteButton() {
//   const navigate = useNavigate();
//   const PlusIcon = AppIcons["plus"];
//   return (
//     <div
//       className="rounded-full bg-primary-500 text-white flex items-center justify-center absolute p-8 bottom-32 right-12"
//       onClick={() => navigate("/notes/create")}
//     >
//       {/* <span className="text-6xl font-light">+</span> */}
//       <PlusIcon
//         size={24}
//         className="text-white font-thin"
//       />
//     </div>
//   );
// }

// export default FloatingCreateNoteButton;

import { useNavigate } from "react-router-dom";

import { Button } from "../../../shared/components";
import { AppIcons } from "../../../shared/icons/Icons";
import { CREATE_NOTE_URL } from "../constants/urls";

function FloatingCreateNoteButton() {
  const navigate = useNavigate();
  const PlusIcon = AppIcons["plus"];

  return (
    <Button
      type="button"
      aria-label="Create New Note"
      onClick={() => navigate(`/${CREATE_NOTE_URL}`)}
      className="rounded-full bg-primary-500 text-white flex items-center justify-center fixed p-4 bottom-40 right-8 shadow-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
    >
      <PlusIcon
        size={24}
        className="text-white font-thin"
      />
    </Button>
  );
}

export default FloatingCreateNoteButton;
