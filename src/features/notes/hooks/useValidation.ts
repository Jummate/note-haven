import { useState } from 'react';
import { TagOption } from '../../tags/types';
import { NoteDraft } from '../pages/CreateNotePage';

type ValidationFunction = (value: TagOption[] | string) => string | null;

interface UseValidationProps {
  initialValues: Record<string, TagOption[] | string>;
  validationRules: Record<string, ValidationFunction>;
  onSubmit?: () => Promise<{ success: boolean; error?: string }>;
  setParentData?: React.Dispatch<React.SetStateAction<NoteDraft>>;
}

export function useValidation({
  initialValues,
  validationRules,
  onSubmit,
  setParentData,
}: UseValidationProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setParentData?.(prev => ({ ...prev, [name]: value }));

    if (validationRules[name]) {
      const error = validationRules[name](value);
      setErrors(prev => ({ ...prev, [name]: error || '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    for (const field in initialValues) {
      if (validationRules[field]) {
        const error = validationRules[field](values[field]);
        if (error) newErrors[field] = error;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    const result = onSubmit && (await onSubmit());

    if (result?.success) {
      setValues(initialValues);
      setErrors({});
    }

    setLoading(false);
  };

  return {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
    setFieldValue: (name: string, value: TagOption[] | string) =>
      setValues(prev => ({ ...prev, [name]: value })),
    setValues,
    setErrors,
    validate,
    setLoading,
  };
}
