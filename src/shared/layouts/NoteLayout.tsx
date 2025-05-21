import React, { PropsWithChildren } from "react";

function NoteLayout({ children }: PropsWithChildren) {
  return <div className="flex-1 flex flex-col">{children}</div>;
}

export default NoteLayout;
