import { ReactNode } from 'react';
import clsx from 'clsx';

type HorizontalWrapperProps = {
  styles?: string;
  children: ReactNode;
};

function HorizontalWrapper({ children, styles }: HorizontalWrapperProps) {
  return <div className={clsx('flex', styles)}>{children}</div>;
}

export default HorizontalWrapper;
