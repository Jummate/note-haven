import React from "react";
import ResponsiveLayout from "../../../shared/layouts/ResponsiveLayout";
import NoteLayout from "../../../shared/layouts/NoteLayout";
import Tags from "../components/Tags";
import MobileLayout from "../../../shared/layouts/MobileLayout";
import DesktopLayout from "../../../shared/layouts/DesktopLayout";
import CreateNoteButton from "../../notes/components/CreateNoteButton";
import NoteList from "../../notes/components/NoteList";
import NotePreview from "../../notes/components/NotePreview";
import { Button } from "../../../shared/components";
import ActionButtonsPanel from "../../../shared/containers/ActionButtonsPanel";
import FloatingCreateNoteButton from "../../notes/components/FloatingCreateNoteButton";
import { useParams } from "react-router-dom";

function TagPage() {
  const { tagSlug } = useParams();
  return (
    <NoteLayout>
      <ResponsiveLayout
        mobile={
          <MobileLayout showHeader>
            <div className="flex flex-col gap-5">
              <ActionButtonsPanel
                showActionButtons={false}
                styles="mb-6"
              />
              {tagSlug ? (
                <>
                  <h1 className="text-3xl font-semibold text-secondary-700">
                    Notes Tagged: <span className="font-bold">{tagSlug}</span>
                  </h1>
                  <p>All notes with the tag "{tagSlug}" are shown here</p>
                  <NoteList
                    notes={["noteTags1", "noteTags2"]}
                    path="/notes"
                    styles="p-2 mt-5"
                  />
                </>
              ) : (
                <Tags
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
                <NoteList
                  notes={[]}
                  path="/notes"
                />
              </>
            }
            secondItem={
              tagSlug ? (
                <>
                  <NotePreview />
                  <div className="absolute bottom-0 left-0 border border-x-0 border-t-1 border-b-0 flex w-full flex-1 p-7 gap-5">
                    <Button styles="md:text-md w-auto">Save Note</Button>
                    <Button
                      variant="outline"
                      styles="md:text-md bg-secondary-200 border-none w-auto"
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <p>Select an item to read. Nothing is selected</p>
              )
            }
            thirdItem={tagSlug && <ActionButtonsPanel showNote={true} />}
          />
        }
      />
    </NoteLayout>
  );
}

export default TagPage;
