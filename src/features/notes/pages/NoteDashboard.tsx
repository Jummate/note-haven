import { useParams, useSearchParams } from 'react-router-dom';

import FloatingCreateNoteButton from '../components/FloatingCreateNoteButton';
import NoteLayout from '../../../shared/layouts/NoteLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import MobileLayout from '../../../shared/layouts/MobileLayout';
import EmptyPageContainer from '../containers/EmptyPageContainer';
import NoteList from '../components/NoteList';
import PageHeader from '../shared/components/PageHeader';
import CreateNoteButton from '../components/CreateNoteButton';
import NotePreview from '../components/NotePreview';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import { NOTES_URL } from '../constants/urls';
import { useNotes } from '../hooks/useNotes';
import { NoteForReviewType } from '../types';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';
import { SidebarLabels } from '../constants/labels';
import { useFilteredNotes } from '../hooks/useFilteredNotes';
import { Input } from '../../../shared/components';
import { ChangeEvent, useState } from 'react';
// import SearchBar from '../../../shared/components/SearchBar';

function NoteDashboard() {
  const { noteId } = useParams();
  const singleNote = useNotes({ noteId }) as NoteForReviewType;
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const { searchQuery, noteToUse, hasNotes } = useFilteredNotes();
  const [value, setValue] = useState<string>(searchQuery);

  const headerText = searchQuery
    ? `Showing results for ${searchQuery}`
    : SidebarLabels.ALL_NOTES.toString();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setValue(input);
    setSearchParams({ search: input });
  }
  if (!hasNotes) return <EmptyPageContainer noteType="active" />;
  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-8 text-secondary-900 font-inter w-full bg-white">
                <PageHeader headerText={searchQuery ? 'Search' : headerText} />
                <Input
                  type="search"
                  value={value}
                  onChange={handleChange}
                  // value={searchQuery}
                  // onChange={() => setFilterQuery('you')}
                />
                {/* <SearchBar /> */}
                {noteToUse.length > 0 && searchQuery && (
                  <p className="my-5">
                    All Notes matching "{searchQuery}" are displayed below.
                  </p>
                )}
                {noteToUse.length > 0 ? (
                  <NoteList data={noteToUse} path={NOTES_URL} />
                ) : (
                  <p>No matching records found</p>
                )}
              </div>
            </div>
            <FloatingCreateNoteButton />
          </MobileLayout>
        }
        desktop={
          <DesktopLayout
            firstItem={
              noteToUse.length > 0 ? (
                <>
                  <CreateNoteButton />
                  <NoteList data={noteToUse} path={NOTES_URL} styles="mt-4" />
                </>
              ) : (
                <p>No matching records found</p>
              )
            }
            secondItem={
              <NotePreview
                note={singleNote}
                showNote={!!noteId && !!singleNote && hasNotes}
                // showNote={false}
              />
            }
            thirdItem={
              <ActionButtonsPanel
                showNote={!!noteId && !!singleNote && hasNotes}
              />
            }
          />
        }
      />
    </NoteLayout>
  );
}

const NoteDashboardWithErrorBoundary = withErrorBoundary(NoteDashboard, {
  FallbackComponent: ErrorFallback,
});

NoteDashboard.WithErrorBoundary = NoteDashboardWithErrorBoundary;

export default NoteDashboard;
