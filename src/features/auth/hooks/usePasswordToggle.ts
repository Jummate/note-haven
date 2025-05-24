import { useState } from "react";

export function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((prev) => !prev);

  const inputType = visible ? "text" : "password";
  const ariaLabel = visible ? "Hide password" : "Show password";

  return {
    visible,
    inputType,
    toggle,
    ariaLabel,
  };
}
