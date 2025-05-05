import React, { PropsWithChildren } from "react";
import EmptyNote from "../../components/EmptyNote";
import CreateNewNoteIcon from "../components/CreateNewNoteIcon";

import { useTabText } from "../../hooks/useTabText";

function EmptyPageMobile({ children }: PropsWithChildren) {
  const { activeTabText } = useTabText();
  return (
    <div className="p-8 text-secondary-900 font-inter w-full bg-white relative">
      <h1 className="font-bold text-4xl font-inter mb-4">{activeTabText}</h1>
      {children}
    </div>
  );
}

export default EmptyPageMobile;
