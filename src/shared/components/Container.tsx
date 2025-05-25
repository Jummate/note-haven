import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
}

export default Container;
