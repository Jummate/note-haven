import { useState } from "react";

import { NavigateFunction } from "react-router-dom";

type ValidationFunction = (
  value: string,
  password?: string,
  component?: string
) => string | null;

interface UseFormProps {
  initialValues: Record<string, string>;
  validationRules: Record<string, ValidationFunction>;
  //   onSubmit: (values: SignupType) => void;
  onSubmit?: (
    values: Record<string, string>,
    navigate?: NavigateFunction
  ) => Promise<{ success: boolean; error?: string }>;
  component?: string;
}

export function useForm({
  initialValues,
  validationRules,
  onSubmit,
  component,
}: UseFormProps) {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    if (validationRules[name]) {
      const error = validationRules[name](
        value,
        name.startsWith("confirm") ? values.password || values.newPassword : undefined,
        component
      );
      setErrors((prev) => ({ ...prev, [name]: error || "" }));
    }
  };

  const setFieldValue = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    for (const field in initialValues) {
      if (validationRules[field]) {
        const error = validationRules[field](
          values[field],
          field.startsWith("confirm")  ? values.password || values.newPassword: undefined,
          component
        );
        if (error) newErrors[field] = error;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      const result = onSubmit && await onSubmit(values);
      if (result?.success) {
        if (component !== "forgotPassword") {
          setValues(initialValues);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    loading,
    setLoading,
    setFieldValue,
  };
}
