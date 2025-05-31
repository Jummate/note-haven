import { ReactNode } from 'react';
import { useResponsive } from '../hooks/useResponsive';

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
