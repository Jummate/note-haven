import { PropsWithChildren } from 'react';

function Container({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex items-center justify-center dark:bg-secondary-700">
      {children}
    </div>
  );
}

export default Container;
