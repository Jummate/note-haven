// import { Link } from "react-router-dom";
import EmptyNote from "./EmptyNote";
import logo from "../../../assets/logo.svg";
import FloatingCreateNoteButton from "./FloatingCreateNoteButton";
import { EmptyPageProps } from "../types";
import CreateNoteButton from "./CreateNoteButton";

function EmptyPage({ noteType, activeTabText }: EmptyPageProps) {
  return (
    <>
      <div className="hidden lg:grid grid-cols-[1fr_2fr] flex-1">
        <div className="p-10 px-7 border border-r-1 border-y-0 border-l-0">
          <div className="mb-12">
            <CreateNoteButton />
          </div>

          <EmptyNote noteType={noteType} />
        </div>
      </div>

      <div className="flex flex-col flex-1 lg:hidden bg-secondary-100">
        <div className="p-8">
          <div className="">
            <img
              src={logo}
              alt="Note Haven Logo"
            />
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="p-8 text-secondary-900 font-inter w-full bg-white relative">
            <h1 className="font-bold text-4xl font-inter mb-4">
              {activeTabText}
            </h1>
            <EmptyNote noteType={noteType} />
            {noteType == "active" && <hr className="hidden sm:block mt-7" />}
            <FloatingCreateNoteButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyPage;
