// import { Link } from "react-router-dom";
import { Button } from "../../../shared/components";
import EmptyNote from "./EmptyNote";
import logo from "../../../assets/logo.svg";
import FloatingCreateNoteButton from "./FloatingCreateNoteButton";
import { EmptyPageProps } from "../types";


function EmptyPage({ noteType, activeTabText }: EmptyPageProps) {
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
            <FloatingCreateNoteButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmptyPage;
