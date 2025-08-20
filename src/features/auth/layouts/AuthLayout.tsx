import { ReactNode } from 'react';

import { VerticalWrapper } from '../../../shared/components';
import logo from '../../../assets/logo.svg';

type AuthLayoutProps = {
  heading: string;
  firstItem: ReactNode;
  secondItem: ReactNode;
  children?: ReactNode;
};

function AuthLayout({
  firstItem,
  secondItem,
  heading,
  children,
}: AuthLayoutProps) {
  return (
    <div className="rounded-xl w-[90%] max-w-2xl flex flex-col gap-6 bg-white dark:bg-secondary-950 dark:text-secondary-50 p-10 md:p-20 py-32 shadow-all-edges">
      <div className="text-center mb-5">
        <VerticalWrapper styles="items-center">
          <img src={logo} alt="Notes Haven logo" />
        </VerticalWrapper>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center mb-10">
        <h1 className="text-3xl mb-3 text-secondary-950 dark:text-secondary-50 font-bold">
          {heading}
        </h1>
        {firstItem}
      </div>
      {secondItem}

      {children}
    </div>
  );
}

export default AuthLayout;
