import React, { PropsWithChildren } from "react";

function NotePage({ children }: PropsWithChildren) {
  return <div className="flex-1 flex flex-col">{children}</div>;
}

export default NotePage;
