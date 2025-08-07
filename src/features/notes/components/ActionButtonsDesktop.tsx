import clsx from 'clsx';

import { Button } from '../../../shared/components';
import { AppIcons } from '../../../shared/icons/Icons';
import { ActionButtonsDesktopProps } from '../types';
import { useNoteStore } from '../stores/noteStore';
import useDeleteNoteMutation from '../hooks/useDeleteNoteMutation';
import useArchiveNoteMutation from '../hooks/useArchiveNoteMutation';
import useRestoreNoteMutation from '../hooks/useRestoreNoteMutation';
import { useModalStore } from '../../../shared/stores/modalStore';
// import { useState } from 'react';
// import Modal from '../../../shared/components/Modal';

function ActionButtonsDesktop({
  styles,
  type = 'active',
  showActionButtons,
}: ActionButtonsDesktopProps) {
  const { setMessage, setFn, setOpenModal, setType } = useModalStore();
  // const [openModal, setOpenModal] = useState<boolean>(false);
  const { selectedNoteId } = useNoteStore();
  const { mutateAsync: deleteNote } = useDeleteNoteMutation();
  const { mutateAsync: archiveNote } = useArchiveNoteMutation();
  const { mutateAsync: restoreNote } = useRestoreNoteMutation();
  const ArchivedIcon = AppIcons['archived'];
  const DeleteIcon = AppIcons['delete'];
  const RestoreIcon = AppIcons['restore'];
  if (!showActionButtons) return null;

  function handleArchive() {
    setFn(async () => {
      await archiveNote(selectedNoteId);
      setOpenModal(false);
    });
    setMessage(
      'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.',
    );
    setType('Archive');
    setOpenModal(true);
  }
  return (
    <div className={clsx('flex flex-col gap-3', styles)}>
      <Button
        type="button"
        variant="outline"
        styles="md:text-md hover:bg-secondary-100"
        onClick={
          type == 'active'
            ? handleArchive
            : async () => await restoreNote(selectedNoteId)
        }
        // onClick={
        //   type == 'active'
        //     ? async () => await archiveNote(selectedNoteId)
        //     : async () => await restoreNote(selectedNoteId)
        // }

        //  onClick={() => {
        //       setFn(async () => {
        //          type == 'active'
        //         ? await archiveNote(selectedNoteId)
        //         : await restoreNote(selectedNoteId)
        //         setOpenModal(false);
        //       });
        //       setMessage(
        //         'Are you sure you want to archive this note? You can find it in the Archived Notes section and restore it anytime.',
        //       );
        //       setType('Delete');
        //       setOpenModal(true);
        //     }}
      >
        {type == 'active' ? <ArchivedIcon size={20} /> : null}
        {type == 'archived' ? <RestoreIcon size={20} /> : null}
        {type === 'active' ? 'Archive Note' : ''}
        {type === 'archived' ? 'Restore Note' : ''}
      </Button>
      <Button
        variant="outline"
        styles="md:text-md hover:bg-secondary-100"
        onClick={() => {
          setFn(async () => {
            await deleteNote(selectedNoteId);
            setOpenModal(false);
          });
          setMessage(
            'Are you sure you want to permanently delete this note? This action cannot be undone.',
          );
          setType('Delete');
          setOpenModal(true);
        }}
      >
        <DeleteIcon size={20} /> Delete Note
      </Button>
    </div>
  );
}

export default ActionButtonsDesktop;
