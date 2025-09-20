import { Button } from '../../../shared/components';

type NoteActionButtonsProps = {
  onNoteSave: () => void;
  onCancel: () => void;
};

function NoteActionButtons({ onNoteSave, onCancel }: NoteActionButtonsProps) {
  return (
    <div className="absolute bottom-0 left-0 border border-x-0 border-t-1 border-b-0 border-secondary-dark flex w-full flex-1 p-7 gap-5">
      <div className="flex gap-4">
        <Button
          styles="md:text-md w-auto px-7"
          onClick={onNoteSave}
          aria-label="Save Note"
        >
          Save Note
        </Button>
        <Button
          // variant="secondary"
          // styles="md:text-md w-auto text-default px-12 hover:bg-secondary"
          variant="outline"
          styles="md:text-md hover:bg-secondary-light w-auto px-12"
          onClick={onCancel}
          aria-label="Cancel Note Editing"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default NoteActionButtons;
