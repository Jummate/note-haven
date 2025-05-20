import React from "react";

import { useResponsive } from "../../../shared/hooks/useResponsive";
import ActionButtonsMobile from "../components/ActionButtonsMobile";
import ActionButtonsDesktop from "../components/ActionButtonsDesktop";

type ActionButtonsPanelProps = {
  type?: "active" | "archived";
  showNote?: boolean;
  showActionButtons?: boolean;
};

function ActionButtonsPanel({
  showNote = true,
  type = "active",
  showActionButtons = true,
}: ActionButtonsPanelProps) {
  const isMobile = useResponsive();

  if (!showNote) return null;
  return isMobile ? (
    <ActionButtonsMobile
      type={type}
      showActionButtons={showActionButtons}
    />
  ) : (
    <ActionButtonsDesktop type={type} />
  );
}

export default ActionButtonsPanel;
