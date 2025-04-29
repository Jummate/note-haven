import React from "react";
import { Button } from "../../../shared/components";
import { Icons } from "../../../shared/icons/Icons";

function AllNotes() {
  const Icon = Icons["plus"];
  const allNotes: string[] = [];
  const noNotes = allNotes && allNotes.length == 0;
  return (
    <div>
      <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr] h-[90%]">
        <div className="p-10 border border-r-1 border-y-0 border-l-0 h-screen">
          <div className="mb-12">
            <Button styles="flex items-center gap-3 justify-center md:text-md">
              <Icon
                size={10}
                // className="inline"
              />
              Create New Note
            </Button>
          </div>

          <div>
            {noNotes ? (
              <div className="rounded-xl bg-secondary-100 p-4 text-secondary-900 font-inter shadow-all-edges">
                <p>
                  You don’t have any notes yet. Start a new note to capture your
                  thoughts and ideas.
                </p>
              </div>
            ) : (
              <div>There is something there</div>
            )}
          </div>
        </div>
        {!noNotes && <div className="">2</div>}
        {!noNotes && <div className="">3</div>}
      </div>

      <div className="lg:hidden bg-primary-50 h-screen w-screen">
        <div>This is the header</div>
        <div className="flex flex-1 w-screen">
          {noNotes ? (
            <div className="rounded-xl bg-secondary-100 p-4 text-secondary-900 font-inter shadow-all-edges w-full">
              <p>
                You don’t have any notes yet. Start a new note to capture your
                thoughts and ideas.
              </p>
            </div>
          ) : (
            <div>There is something there</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllNotes;
