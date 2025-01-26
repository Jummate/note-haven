import { useState } from "react";

type ValidationFunction = (value: string) => string | null;

interface UseFormProps {
  initialValues: Record<string, string>;
  validationRules: Record<string, ValidationFunction>;
  onSubmit: (values: Record<string, string>) => void;
}

export function useForm({
  initialValues,
  validationRules,
  onSubmit,
}: UseFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Validate on change
    if (validationRules[name]) {
      const error = validationRules[name](value);
      setErrors((prev) => ({ ...prev, [name]: error || "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    for (const field in initialValues) {
      if (validationRules[field]) {
        const error = validationRules[field](values[field]);
        if (error) newErrors[field] = error;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(values);
    }
  };

  return { values, errors, handleChange, handleSubmit };
}
