import { Button } from "../../../shared/components";

type NoteActionButtonsProps = {
  onNoteSave: () => void;
  onCancel: () => void;
};

function NoteActionButtons({ onNoteSave, onCancel }: NoteActionButtonsProps) {
  return (
    <div className="absolute bottom-0 left-0 border border-x-0 border-t-1 border-b-0 flex w-full flex-1 p-7 gap-5">
      <Button
        styles="md:text-md w-auto"
        onClick={onNoteSave}
      >
        Save Note
      </Button>
      <Button
        variant="outline"
        styles="md:text-md bg-secondary-200 border-none w-auto"
        onClick={onCancel}
      >
        Cancel
      </Button>
    </div>
  );
}

export default NoteActionButtons;
