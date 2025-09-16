import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResponsive } from '../../../shared/hooks/useResponsive';
import { AppIcons } from '../../../shared/icons/Icons';
import clsx from 'clsx';

const ChevronLeftIcon = AppIcons['chevronLeft'];

type SettingsSectionProps = {
  heading: string;
  subHeading?: string;
  styles?: string;
};

function SettingsSection({
  heading,
  subHeading,
  children,
  styles,
}: PropsWithChildren<SettingsSectionProps>) {
  const navigate = useNavigate();
  const isMobile = useResponsive();
  return (
    <section className={clsx('flex flex-col gap-7', styles)}>
      {isMobile && (
        // <div className="flex flex-1">

        // </div>
        <button
          className="flex gap-2 items-center text-2xl cursor-pointer hover:text-primary"
          aria-label="Go Back to Settings"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="text-secondary text-4xl hover:text-primary" />
          Settings
        </button>
      )}

      <h1 className="text-default font-bold text-3xl">{heading}</h1>

      {subHeading && <h2 className="text-secondary text-2xl">{subHeading}</h2>}

      {children}
    </section>
  );
}

export default SettingsSection;
