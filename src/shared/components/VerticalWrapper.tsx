import { ReactNode } from 'react';
import clsx from 'clsx';

type VerticalWrapperProps = {
  children: ReactNode;
  styles?: string;
};

function VerticalWrapper({ children, styles }: VerticalWrapperProps) {
  return <div className={clsx('flex flex-col gap-5', styles)}>{children}</div>;
}

export default VerticalWrapper;
