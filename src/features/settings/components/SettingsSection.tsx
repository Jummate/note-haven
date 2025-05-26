import { PropsWithChildren } from "react";
import { Button, Input } from "../../../shared/components";
import { useResponsive } from "../../../shared/hooks/useResponsive";
import { AppIcons } from "../../../shared/icons/Icons";
import clsx from "clsx";

const ChevronLeftIcon = AppIcons["chevronLeft"];

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
  const isMobile = useResponsive();
  return (
    <section className={clsx("flex flex-col gap-7", styles)}>
      {isMobile && (
        <div className="flex flex-1">
          <div
            className="flex gap-2 items-center text-2xl cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label="Go Back to Settings"
          >
            <ChevronLeftIcon className="text-secondary-500 text-4xl" />
            Settings
          </div>
        </div>
      )}

      <h1 className="text-secondary-900 font-bold text-3xl">{heading}</h1>

      {subHeading && (
        <h2 className="text-secondary-600 text-2xl">{subHeading}</h2>
      )}

      {children}
    </section>
  );
}

export default SettingsSection;
