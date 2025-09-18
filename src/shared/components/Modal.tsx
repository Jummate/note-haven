import { AppIcons } from '../icons/Icons';
import Button from './Button';
import HorizontalLine from './HorizontalLine';

import { useModalStore } from '../stores/modalStore';

function Modal() {
  const { type, openModal, setOpenModal, message, fn } = useModalStore();
  const bgColor = type == 'Delete' ? 'bg-danger' : 'bg-primary';
  const text = `${type} Note`;

  const ArchivedIcon = AppIcons['archived'];
  const DeleteIcon = AppIcons['delete'];

  if (!openModal) return null;
  return (
    <article className="flex justify-center items-center bg-black/50 fixed top-0 left-0 min-h-screen w-full z-50 p-10">
      <div className="flex flex-col rounded-2xl bg-secondary-light p-4 w-full md:w-1/2 max-w-4xl">
        <div className="flex justify-center p-5 py-3 gap-10 items-start">
          <div className="p-3 bg-muted-light rounded-lg">
            {type == 'Archive' ? (
              <ArchivedIcon size={20} className="text-default" />
            ) : (
              <DeleteIcon size={20} className="text-default" />
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-default font-bold font-inter">{text}</h1>
            <p className="text-default">{message}</p>
          </div>
        </div>
        <HorizontalLine />
        <div className="flex justify-end items-center p-4">
          <div className="flex gap-4">
            <Button
              variant="secondary"
              styles="md:text-md bg-muted-light w-auto px-12 hover:bg-muted hover:text-default"
              onClick={() => setOpenModal(false)}
              aria-label="Cancel"
            >
              Cancel
            </Button>

            <Button
              variant="danger"
              styles={`${bgColor} text-white md:text-md w-auto px-7 hover:bg-opacity-90`}
              onClick={fn}
              aria-label={text}
            >
              {text}
            </Button>
          </div>
          {/* <div className="flex justify-between items-center">
            <Button onClick={() => setOpenModal(false)}>Cancel</Button>
            <Button onClick={fn} styles={`${bgColor} text-white`}>
              {text}
            </Button>
          </div> */}
        </div>
      </div>
    </article>
  );
}

export default Modal;
