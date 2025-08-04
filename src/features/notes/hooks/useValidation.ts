// import { useState } from 'react';
// import { TagOption } from '../../tags/types';
// import { NoteDraft } from '../pages/CreateNotePage';

// type ValidationFunction = (value: TagOption[] | string) => string | null;

// interface UseValidationProps {
//   //   initialValues: { noteTitle: string; noteTags: TagOption[]; noteContent: string };
//   initialValues: Record<string, TagOption[] | string>;
//   validationRules: Record<string, ValidationFunction>;
//   onSubmit?: (values: Record<string, TagOption[] | string>) => Promise<void>;
//   //   parentData:NoteDraft
//   setParentData?: React.Dispatch<React.SetStateAction<NoteDraft>>;
// }

// export function useValidation({
//   initialValues,
//   validationRules,
//   onSubmit,
//   setParentData,
// }: UseValidationProps) {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [loading, setLoading] = useState(false);

//   //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //     const { name, value } = e.target;
//   //     setValues(prev => ({ ...prev, [name]: value }));

//   //     if (validationRules[name]) {
//   //       const error = validationRules[name](value);
//   //       setErrors(prev => ({ ...prev, [name]: error || '' }));
//   //     }
//   //   };

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     const { name, value } = e.target;
//     setValues(prev => ({ ...prev, [name]: value }));
//     setParentData && setParentData(prev => ({ ...prev, [name]: value }));

//     if (validationRules[name]) {
//       const error = validationRules[name](value);
//       setErrors(prev => ({ ...prev, [name]: error || '' }));
//     }
//   };

//   const setFieldValue = (name: string, value: TagOption[] | string) => {
//     setValues(prev => ({ ...prev, [name]: value }));
//   };

//   const validate = (): boolean => {
//     const newErrors: Record<string, string> = {};

//     for (const field in initialValues) {
//       if (validationRules[field]) {
//         const error = validationRules[field](values[field]);
//         if (error) newErrors[field] = error;
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validate()) return;

//     setLoading(true);
//     const result = onSubmit && (await onSubmit(values));

//     // if (result?.success) {
//     // }
//     setValues(initialValues);

//     setLoading(false);
//   };

//   return {
//     values,
//     errors,
//     loading,
//     handleChange,
//     handleSubmit,
//     setFieldValue,
//     setValues,
//     setErrors,
//     validate,
//     setLoading,
//   };
// }

import { useState } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { TagOption } from '../../tags/types';

type ValidationFunction = (value: TagOption[] | string) => string | null;

interface UseValidationProps {
  //   initialValues: { noteTitle: string; noteTags: TagOption[]; noteContent: string };
  initialValues: Record<string, TagOption[] | string>;
  validationRules: Record<string, ValidationFunction>;
  onSubmit?: (
    values: Record<string, TagOption[] | string>,
    navigate?: NavigateFunction,
  ) => Promise<{ success: boolean; error?: string }>;
}

export function useValidation({
  initialValues,
  validationRules,
  onSubmit,
}: UseValidationProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setValues(prev => ({ ...prev, [name]: value }));

  //     if (validationRules[name]) {
  //       const error = validationRules[name](value);
  //       setErrors(prev => ({ ...prev, [name]: error || '' }));
  //     }
  //   };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

    if (validationRules[name]) {
      const error = validationRules[name](value);
      setErrors(prev => ({ ...prev, [name]: error || '' }));
    }
  };

  const setFieldValue = (name: string, value: TagOption[] | string) => {
    setValues(prev => ({ ...prev, [name]: value }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    const result = onSubmit && (await onSubmit(values));

    if (result?.success) {
      setValues(initialValues);
    }

    setLoading(false);
  };

  return {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
    setErrors,
    validate,
    setLoading,
  };
}
