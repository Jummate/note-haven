import NoteLayout from '../../../shared/layouts/NoteLayout';
import DesktopLayout from '../../../shared/layouts/DesktopLayout';
import MobileLayout from '../../../shared/layouts/MobileLayout';
import EmptyPageContainer from '../containers/EmptyPageContainer';
import NoteList from '../components/NoteList';
import CreateNoteButton from '../components/CreateNoteButton';
import ResponsiveLayout from '../../../shared/layouts/ResponsiveLayout';
// import FloatingCreateNoteButton from "../components/FloatingCreateNoteButton";
import { NOTES_URL } from '../constants/urls';
import NoteActionButtons from '../components/NoteActionButtons';
import ActionButtonsPanel from '../../../shared/containers/ActionButtonsPanel';
import { useNotes } from '../hooks/useNotes';
import { PopulatedNote } from '../types';
import { withErrorBoundary } from '../../../shared/components/WithErrorBoundary';
import { ErrorFallback } from '../../../shared/components/ErrorFallback';

function CreateNotePage() {
  const allNotes = useNotes({ type: 'active' }) as PopulatedNote[] | undefined;
  const hasNotes = allNotes && allNotes.length > 0;

  if (!hasNotes) return <EmptyPageContainer noteType="active" />;

  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout>
            <div className="flex flex-1 justify-center">
              <div className="p-4 text-secondary-900 font-inter w-full bg-white">
                <ActionButtonsPanel />
                <hr className=" bg-secondary-100 my-6 h-1" />
                <p>I will create notes here</p>
              </div>
            </div>
            {/* <FloatingCreateNoteButton /> */}
          </MobileLayout>
        }
        desktop={
          <DesktopLayout
            firstItem={
              <>
                <CreateNoteButton />
                <NoteList data={allNotes} path={NOTES_URL} />
              </>
            }
            secondItem={
              <>
                <p>I will create notes here</p>
                <NoteActionButtons
                  onCancel={() => console.log('note cancelled')}
                  onNoteSave={() => console.log('note saved')}
                />
              </>
            }
            thirdItem={<ActionButtonsPanel showActionButtons={false} />}
          />
        }
      />
    </NoteLayout>
  );

  // return (
  //   <div className="flex-1 flex flex-col">
  //     {hasNotes ? (
  //       <NoteLayout>
  //         <DesktopLayout>
  //           <div className="p-10 px-7">
  //             <div className="mb-12">
  //               <CreateNoteButton />
  //             </div>
  //             <div className="divide-y divide-secondary-200">
  //               <NoteList notes={allNotes} />
  //             </div>
  //           </div>
  //           <div className="border border-r-1 border-y-0 border-l-1 relative flex">
  //             <div>I will create notes here</div>
  //             <div className="absolute bottom-0 left-0 border border-x-0 border-t-1 border-b-0 flex w-full flex-1 p-7 gap-5">
  //               <Button styles="md:text-md w-auto">Save Note</Button>
  //               <Button
  //                 variant="outline"
  //                 styles="md:text-md bg-secondary-200 border-none w-auto"
  //               >
  //                 Cancel
  //               </Button>
  //             </div>
  //           </div>
  //         </DesktopLayout>
  //         <MobileLayout>
  //           <div className="flex flex-1 justify-center">
  //             <div className="p-8 text-secondary-900 font-inter w-full bg-white">
  //               <div>Tthis is the mini header</div>
  //               <div>I will create notes here</div>
  //             </div>
  //           </div>
  //         </MobileLayout>
  //       </NoteLayout>
  //     ) : (
  //       <EmptyPageContainer noteType="notes" />
  //     )}
  //   </div>
  // );
}

const CreateNotePageWithErrorBoundary = withErrorBoundary(CreateNotePage, {
  FallbackComponent: ErrorFallback,
});

CreateNotePage.WithErrorBoundary = CreateNotePageWithErrorBoundary;

export default CreateNotePage;
