import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components';
import { CREATE_NOTE_URL } from '../constants/urls';

function CreateNoteButton() {
  const navigate = useNavigate();
  return (
    <Button
      styles="flex items-center gap-3 justify-center md:text-md text-nowrap font-semibold focus:outline-none focus:ring-2 focus:ring-primary hover:primary-dark"
      onClick={() => navigate(`/${CREATE_NOTE_URL}`)}
      aria-label="Create a new note"
    >
      + Create New Note
    </Button>
  );
}

export default CreateNoteButton;
