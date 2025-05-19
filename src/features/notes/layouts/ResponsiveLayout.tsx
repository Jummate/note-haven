import { ReactNode } from "react";
import { useResponsive } from "../../../shared/hooks/useResponsive";
import MobileLayout from "./MobileLayout";
import DesktopLayout from "./DesktopLayout";

const ResponsiveLayout = ({
  mobile,
  desktop,
}: {
  mobile: ReactNode;
  desktop: ReactNode;
}) => {
  const isMobile = useResponsive();
  return <>{isMobile ? mobile : desktop}</>;
};
export default ResponsiveLayout;
