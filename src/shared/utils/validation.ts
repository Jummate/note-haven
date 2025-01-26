type ValidationResult = string | null;

export const validationRules: Record<
  string,
  (value: string) => ValidationResult
> = {
  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required.";
    if (!emailRegex.test(value)) return "Please enter a valid email.";
    return null;
  },
  password: (value: string) => {
    if (!value) return "Password is required.";
    if (value.length < 8) return "Password must be at least 8 characters.";
    return null;
  },
  confirmPassword: (value: string) => {
    if (!value) return "Confirm Password is required.";
    if (value.length < 8)
      return "Confirm Password must be at least 8 characters.";
    return null;
  },
};
