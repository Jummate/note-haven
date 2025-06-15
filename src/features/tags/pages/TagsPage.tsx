import { useParams } from 'react-router-dom';

import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
import NoteLayout from '../../../shared/layouts/NoteLayout';
import Tags from '../components/Tags';
import MobileLayout from '../../../shared/layouts/MobileLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import CreateNoteButton from '../../notes/components/CreateNoteButton';
import NoteList from '../../notes/components/NoteList';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import FloatingCreateNoteButton from '../../notes/components/FloatingCreateNoteButton';
import { useNoteStore } from '../../notes/stores/noteStore';
import NoContent from '../../../shared/components/NoContent';
import { NOTES_URL } from '../../notes/constants/urls';

function TagPage() {
  const { tagSlug } = useParams();

  // const { noteId } = useParams();

  const getNotes = useNoteStore(state => state.getNotes);
  const allNotes = getNotes();

  const getNotesByTag = useNoteStore(state => state.getNotesByTag);
  // const notesFilteredByTag = tagSlug ? getNotesByTag(tagSlug) : undefined;
  const notesToShow = tagSlug ? getNotesByTag(tagSlug) : allNotes;

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout showHeader>
            <div className="flex flex-col gap-5">
              <ActionButtonsPanel showActionButtons={false} styles="mb-6" />
              {tagSlug ? (
                <>
                  <h1 className="text-3xl font-semibold text-secondary-700">
                    Notes Tagged: <span className="font-bold">{tagSlug}</span>
                  </h1>
                  <p>All notes with the tag "{tagSlug}" are shown here</p>
                  <NoteList
                    data={notesToShow}
                    path={NOTES_URL}
                    styles="p-2 mt-5"
                  />
                </>
              ) : (
                <Tags.WithErrorBoundary
                  divider="vertical"
                  styles="p-4"
                  titleStyles="font-bold text-3xl"
                  listItemStyles="text-xl text-secondary-800"
                />
              )}
            </div>

            <FloatingCreateNoteButton />
          </MobileLayout>
        }
        desktop={
          <DesktopLayout
            firstItem={
              <>
                <CreateNoteButton />
                <NoteList data={notesToShow} path={NOTES_URL} styles="mt-4" />
              </>
            }
            secondItem={<NoContent text="Select a note to preview" />}
            thirdItem={
              tagSlug && (
                <ActionButtonsPanel
                  // showNote={!!notesToShow}
                  showActionButtons={false}
                  type="active"
                />
              )
            }
          />
        }
      />
    </NoteLayout>
  );
}

export default TagPage;
