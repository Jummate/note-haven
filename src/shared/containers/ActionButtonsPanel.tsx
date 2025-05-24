import { useResponsive } from "../hooks/useResponsive";
import ActionButtonsMobile from "../../features/notes/components/ActionButtonsMobile";
import ActionButtonsDesktop from "../../features/notes/components/ActionButtonsDesktop";

type ActionButtonsPanelProps = {
  type?: "active" | "archived";
  showNote?: boolean;
  showActionButtons?: boolean;
  styles?: string;
};

function ActionButtonsPanel({
  styles,
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
      styles={styles}
    />
  ) : (
    <ActionButtonsDesktop
      type={type}
      styles={styles}
    />
  );
}

export default ActionButtonsPanel;
