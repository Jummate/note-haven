import { toast } from "react-toastify";

type NotifyProps = {
  type?: "success" | "info" | "warning" | "error";
  message: string;
  action?: () => void;
};
export const notify = ({ type = "success", message, action }: NotifyProps) =>
  toast[type](message, { autoClose: 3000, onClose: action });
