// import React from "react";
import { Icons } from "../../../../shared/icons/Icons";
import { useNavigate } from "react-router-dom";

function FloatingCreateNoteButton() {
  const navigate = useNavigate();
  const PlusIcon = Icons["plus"];
  return (
    <div
      className="rounded-full bg-primary-500 text-white flex items-center justify-center absolute p-8 bottom-32 right-12"
      onClick={() => navigate("/notes/createnote")}
    >
      {/* <span className="text-6xl font-light">+</span> */}
      <PlusIcon
        size={24}
        className="text-white font-thin"
      />
    </div>
  );
}

export default FloatingCreateNoteButton;
