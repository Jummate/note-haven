type ValidationResult = string | null;

export const validationRules: Record<
  string,
  (value: string, password?: string, component?: string) => ValidationResult
> = {
  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'Email is required.';
    if (!emailRegex.test(value)) return 'Please enter a valid email.';
    return null;
  },
  password: (value: string, component?: string) => {
    if (!value) return 'Password is required.';
    if (value.length < 8 && component == 'signup')
      return 'Password must be at least 8 characters.';
    return null;
  },
  confirmPassword: (value: string, password?: string) => {
    if (!value) return 'Confirm Password is required.';
    if (value.length < 8)
      return 'Confirm Password must be at least 8 characters.';
    if (value !== password) return 'Passwords do not match.';
    return null;
  },
  oldPassword: (value: string) => {
    if (!value) return 'Old Password is required.';
    if (value.length < 8) return 'Old Password must be at least 8 characters.';
    return null;
  },
  newPassword: (value: string) => {
    if (!value) return 'New Password is required.';
    if (value.length < 8) return 'New Password must be at least 8 characters.';
    return null;
  },
  confirmNewPassword: (value: string, password?: string) => {
    if (!value) return 'Confirm New Password is required.';
    if (value.length < 8)
      return 'Confirm New Password must be at least 8 characters.';
    if (value !== password) return 'Passwords do not match.';
    return null;
  },
};
