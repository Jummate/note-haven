// import { Link } from "react-router-dom";
import { Button } from "../../../shared/components";
import EmptyNote from "./EmptyNote";
import logo from "../../../assets/logo.svg";
import { useTabText } from "../hooks/useTabText";
import CreateNewNoteIcon from "../shared/components/CreateNewNoteIcon";

type EmptyPageProps = {
  noteType: string;
};



function EmptyPage({ noteType }: EmptyPageProps) {
  const { activeTabText } = useTabText();
  return (
    <>
      <div className="hidden lg:grid grid-cols-[1fr_2fr] flex-1">
        <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">
          <div className="mb-12">
            <Button styles="flex items-center gap-3 justify-center md:text-md text-nowrap font-semibold">
              {/* <Icon
      size={10}
      // className="inline"
      /> */}
              + Create New Note
            </Button>
          </div>

          <EmptyNote noteType={noteType} />
        </div>
      </div>

      <div className="flex flex-col flex-1 lg:hidden bg-secondary-100">
        <div className="p-8">
          <div className="">
            <img
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="p-8 text-secondary-900 font-inter w-full bg-white relative">
            <h1 className="font-bold text-4xl font-inter mb-4">
              {activeTabText}
            </h1>
            <EmptyNote noteType={noteType} />
            {noteType == "notes" && <hr className="hidden sm:block mt-7" />}
            <CreateNewNoteIcon />
          </div>
        </div>
      </div>
    </>
  );
}

// function EmptyNote({ noteType }: EmptyNoteProps) {
//   return noteType == "notes" ? (

//     <div className="rounded-xl bg-secondary-100 border border-secondary-200 p-3">
//       <p>
//         You don’t have any notes yet. Start a new note to capture your thoughts
//         and ideas.
//       </p>
//     </div>
//   ) : (
//     <>
//       <div>
//         All your archived notes are stored here. You can restore or delete them
//         anytime.
//       </div>
//       <div className="rounded-xl bg-secondary-100 border border-secondary-200 p-3 mt-6">
//         <p>
//           No notes have been archived yet. Move notes here for safekeeping, or{" "}
//           <Link
//             to="/notes/createnote"
//             className="underline"
//           >
//             create a new note.
//           </Link>
//         </p>
//       </div>
//     </>
//   );
// }

export default EmptyPage;
