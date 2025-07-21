import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { AppIcons } from '../../../shared/icons/Icons';
import { ActionButtonsMobileProps } from '../types';
// import { createNote } from '../services/noteService';

import useDeleteNoteMutation from '../hooks/useDeleteNoteMutation';
import useArchiveNoteMutation from '../hooks/useArchiveNoteMutation';
import useRestoreNoteMutation from '../hooks/useRestoreNoteMutation';
import { useNoteStore } from '../stores/noteStore';
// import { archiveNote, deleteNote, restoreNote } from '../services/noteService';

function ActionButtonsMobile({
  styles,
  type,
  showActionButtons,
  onNoteSave,
}: ActionButtonsMobileProps) {
  const navigate = useNavigate();

  console.log('type', type);

  const { selectedNoteId } = useNoteStore();
  const { mutateAsync: deleteNote } = useDeleteNoteMutation();
  const { mutateAsync: archiveNote } = useArchiveNoteMutation();
  const { mutateAsync: restoreNote } = useRestoreNoteMutation();

  const ArchivedIcon = AppIcons['archived'];
  const DeleteIcon = AppIcons['delete'];
  const RestoreIcon = AppIcons['restore'];
  const ChevronLeftIcon = AppIcons['chevronLeft'];
  return (
    <div className={clsx('flex gap-3', styles)}>
      <div className="flex flex-1 justify-between">
        <button
          className="flex gap-2 items-center text-2xl cursor-pointer hover:text-primary-500/80"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon
            aria-hidden="true"
            className="text-secondary-500 text-4xl"
          />
          Go Back
        </button>
        {showActionButtons && (
          <div className="flex gap-5 items-center text-2xl">
            {type && (
              <button
                aria-label="Delete Note"
                className="hover:text-primary-500/80"
                onClick={async () => await deleteNote(selectedNoteId)}
              >
                <DeleteIcon className="cursor-pointer" />
              </button>
            )}
            {type === 'active' && (
              <button
                aria-label="Archive Note"
                className="hover:text-primary-500/80"
                onClick={async () => await archiveNote(selectedNoteId)}
              >
                <ArchivedIcon className="cursor-pointer" aria-hidden="true" />
              </button>
            )}
            {type === 'archived' && (
              <button
                aria-label="Restore Note"
                className="hover:text-primary-500/80"
                onClick={async () => await restoreNote(selectedNoteId)}
              >
                <RestoreIcon aria-hidden="true" className="cursor-pointer" />
              </button>
            )}
            <button className="text-secondary-500 cursor-pointer hover:opacity-80">
              Cancel
            </button>
            <button
              className="text-primary-500 cursor-pointer"
              onClick={onNoteSave}
            >
              Save Note
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActionButtonsMobile;
