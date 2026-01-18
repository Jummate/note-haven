import { Link } from 'react-router-dom';

import { EmptyNoteProps } from '../types';
import { CREATE_NOTE_URL } from '../constants/urls';

function EmptyNote({ noteType }: EmptyNoteProps) {
  if (noteType == 'active') {
    return (
      <div className="rounded-xl bg-secondary border border-secondary-dark p-3">
        <p>
          You don’t have any notes yet. Start a new note to capture your
          thoughts and ideas.
        </p>
      </div>
    );
  }

  return (
    <div className="text-default">
      <p>
        All your archived notes are stored here. You can restore or delete them
        anytime.
      </p>
      <div className="rounded-xl bg-secondary border border-secondary-dark p-4 mt-6">
        <p>
          No notes have been archived yet. Move notes here for safekeeping, or{' '}
          <Link
            to={`/notes/${CREATE_NOTE_URL}`}
            // to="/notes/create"
            className="underline text-primary hover:text-primary-dark"
          >
            create a new note
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default EmptyNote;
