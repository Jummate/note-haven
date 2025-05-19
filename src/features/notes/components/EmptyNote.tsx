import { Link } from "react-router-dom";

type EmptyNoteProps = {
  noteType: string;
};

function EmptyNote({ noteType }: EmptyNoteProps) {
  return noteType == "notes" ? (
    <div className="rounded-xl bg-secondary-100 border border-secondary-200 p-3">
      <p>
        You don’t have any hfd nfdhjfdbnfdjhdf notes yet. Start a new note to
        capture your thoughts and ideas.
      </p>
    </div>
  ) : (
    <>
      <div>
        All your archived notes are stored here. You can restore or delete them
        anytime.
      </div>
      <div className="rounded-xl bg-secondary-100 border border-secondary-200 p-3 mt-6">
        <p>
          No notes have been archived yet. Move notes here for safekeeping, or{" "}
          <Link
            to="/notes/createnote"
            className="underline"
          >
            create a new note.
          </Link>
        </p>
      </div>
    </>
  );
}

export default EmptyNote;
