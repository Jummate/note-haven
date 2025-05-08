// import React from "react";

function Note() {
  return (
    <div className="flex flex-col gap-3 py-3">
      <h1 className="font-bold text-2xl">React Performance Optimisation</h1>

      <div className="flex gap-3 text-lg">
        {["Dev", "React"].map((tag) => (
          <span key={tag} className="bg-secondary-200 px-3 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <p className="text-lg">29 Oct 2024</p>
    </div>
  );
}

function NoteList({ notes }: { notes: string[] }) {
  return (
    <>
      {notes.map((_, index) => (
        <Note key={index} />
      ))}
    </>
  );
}

export default NoteList;
