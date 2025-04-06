type ValidationResult = string | null;

export const validationRules: Record<
  string,
  (value: string, password?: string, component?: string) => ValidationResult
> = {
  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required.";
    if (!emailRegex.test(value)) return "Please enter a valid email.";
    return null;
  },
  password: (value: string, component?: string) => {
    if (!value) return "Password is required.";
    if (value.length < 8 && component == "signup")
      return "Password must be at least 8 characters.";
    return null;
  },
  confirmPassword: (value: string, password?: string) => {
    if (!value) return "Confirm Password is required.";
    if (value.length < 8)
      return "Confirm Password must be at least 8 characters.";
    if (value !== password) return "Passwords do not match.";
    return null;
  },
};
