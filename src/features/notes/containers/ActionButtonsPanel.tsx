import React from "react";

import { useResponsive } from "../../../shared/hooks/useResponsive";
import ActionButtonsMobile from "../components/ActionButtonsMobile";
import ActionButtonsDesktop from "../components/ActionButtonsDesktop";

type ActionButtonsPanelProps = {
  type?:"active" | "archived"
  showNote?: boolean;
};

function ActionButtonsPanel({
  showNote = true,
  type="active"
}: ActionButtonsPanelProps) {

  const isMobile = useResponsive();

  if (!showNote) return null;
  return isMobile ? <ActionButtonsMobile type={type}/> : <ActionButtonsDesktop type={type}/>
}

export default ActionButtonsPanel;
