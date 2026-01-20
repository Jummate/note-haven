import { useNavigate } from 'react-router-dom';

import { Button } from '../../../shared/components';
import { AppIcons } from '../../../shared/icons/Icons';
import { CREATE_NOTE_URL } from '../constants/urls';

function FloatingCreateNoteButton() {
  const navigate = useNavigate();
  const PlusIcon = AppIcons['plus'];

  return (
    <Button
      type="button"
      aria-label="Create New Note"
      onClick={() => navigate(`/notes/${CREATE_NOTE_URL}`)}
      className="h-24 w-24 rounded-full bg-primary text-white flex items-center justify-center fixed p-4 bottom-40 right-8 shadow-lg hover:font-bold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <PlusIcon size={24} className="text-white font-thin" />
    </Button>
  );
}

export default FloatingCreateNoteButton;
