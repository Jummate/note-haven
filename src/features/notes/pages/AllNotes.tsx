// import React from "react";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";
// import logo from "../../../assets/logo.svg";
// import { useTabStore } from "../stores/tabStore";
// import { tabsMap } from "../constants/tabs";
// import EmptyNote from "../components/EmptyNote";
// import { useTabText } from "../hooks/useTabText";
import CreateNewNoteIcon from "../shared/components/CreateNewNoteIcon";
import NotePage from "../shared/containers/NotePage";
import DesktopContainer from "../shared/containers/DesktopContainer";
import MobileContainer from "../shared/containers/MobileContainer";
// import EmptyPageMobile from "../shared/containers/EmptyPageMobile";
import EmptyPage from "../components/EmptyPage";
import NoteList from "../components/NoteList";
import PageHeader from "../shared/components/PageHeader";

function NoteDetails() {
  const TagIcon = Icons["tags"];
  const ClockIcon = Icons["clock"];
  return (
    <article className="p-7 flex flex-col flex-1">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">React Performance Optimisation</h1>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-[150px_1fr]">
            <span>
              <TagIcon className="inline" /> Tags
            </span>
            <span>Dev, React</span>
          </div>
          <div className="grid grid-cols-[150px_1fr]">
            <span>
              <ClockIcon className="inline" /> Last Edited
            </span>
            <span>29 Oct 2024</span>
          </div>
          <hr className="w-full" />
        </div>

        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </article>
  );
}

function AllNotes() {
  // const PlusIcon = Icons["plus"];
  const ArchivedIcon = Icons["archived"];
  const DeleteIcon = Icons["delete"];
  const allNotes: string[] = ["okay", "Hello", "World", "You", "are", "Welcome"];
  const hasNotes = allNotes && allNotes.length > 0;

  // const { activeTabText } = useTabText();
  //   const activeTab = useTabStore((state) => state.activeTab);

  //   const { text: activeTabText } = tabsMap[activeTab];
  return (
    <div className="flex-1 flex flex-col">
      {hasNotes ? (
        <NotePage>
          <DesktopContainer>
            <div className="p-10 px-7">
              <div className="mb-12">
                <Button styles="flex items-center gap-3 justify-center md:text-md text-nowrap font-semibold">
                  + Create New Note
                </Button>
              </div>
              <div className="divide-y divide-secondary-200">
                <NoteList notes={allNotes} />
              </div>
            </div>
            <div className="border border-r-1 border-y-0 border-l-1 relative flex">
              <NoteDetails />
              <div className="absolute bottom-0 left-0 border border-x-0 border-t-1 border-b-0 flex w-full flex-1 p-7 gap-5">
                <Button styles="md:text-md w-auto">Save Note</Button>
                <Button
                  variant="outline"
                  styles="md:text-md bg-secondary-200 border-none w-auto"
                >
                  Cancel
                </Button>
              </div>
            </div>
            <div className="p-5">
              <div className="flex flex-col gap-3">
                <Button variant="outline" styles="md:text-md">
                  <ArchivedIcon size={20} /> Archive Note
                </Button>
                <Button variant="outline" styles="md:text-md">
                  <DeleteIcon /> Delete Note
                </Button>
              </div>
            </div>
          </DesktopContainer>
          <MobileContainer>
            <div className="flex flex-1 justify-center">
              <div className="p-8 text-secondary-900 font-inter w-full bg-white">
                <PageHeader />
                <div className="divide-y divide-secondary-200">
                  <NoteList notes={allNotes} />
                </div>
              </div>
            </div>
            <CreateNewNoteIcon />
          </MobileContainer>
        </NotePage>
      ) : (
        <EmptyPage noteType="notes" />
      )}
    </div>
  );
}

export default AllNotes;
