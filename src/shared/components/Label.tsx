import { ReactNode } from 'react';
import clsx from 'clsx';

interface LabelProps {
  styles?: string;
  children: ReactNode;
  htmlFor?: string;
  isRequired?: boolean;
}
function Label({ children, styles, htmlFor, isRequired }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={clsx('text-default', styles)}>
      {children} {isRequired ?? <sup className="text-red-500">*</sup>}
    </label>
  );
}

export default Label;
