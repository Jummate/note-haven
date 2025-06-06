import { renderHook, act } from '@testing-library/react';
import { useForm } from './useForm';
import { describe, it, expect, vi } from 'vitest';

describe('useForm', () => {
  const initialValues = { email: '', password: '', confirmPassword: '' };

  const validationRules = {
    email: (value: string) => (!value.includes('@') ? 'Invalid email' : null),
    password: (value: string) => (value.length < 8 ? 'Too short' : null),
    confirmPassword: (value: string, password?: string) =>
      value !== password ? 'Passwords do not match' : null,
  };

  const onSubmit = vi.fn().mockResolvedValue({ success: true });

  it('should update values on change and validate', () => {
    const { result } = renderHook(() =>
      useForm({ initialValues, validationRules, onSubmit }),
    );

    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'bademail' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.values.email).toBe('bademail');
    expect(result.current.errors.email).toBe('Invalid email');
  });

  it('should set errors on invalid submit', async () => {
    const { result } = renderHook(() =>
      useForm({ initialValues, validationRules, onSubmit }),
    );

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent);
    });

    expect(result.current.errors.email).toBe('Invalid email');
    expect(onSubmit).not.toHaveBeenCalled();
  });

  //   it("should set error when confirmPassword does not match password", () => {
  //     const { result } = renderHook(() =>
  //       useForm({ initialValues, validationRules, onSubmit }),
  //     );

  //     act(() => {
  //       result.current.setFieldValue("password", "validpassword");
  //       result.current.setFieldValue("confirmPassword", "differentpassword");
  //     });

  //     expect(result.current.errors.confirmPassword).toBe(
  //       "Passwords do not match",
  //     );
  //   });

  it('should submit and reset when valid', async () => {
    const { result } = renderHook(() =>
      useForm({ initialValues, validationRules, onSubmit }),
    );

    act(() => {
      result.current.setFieldValue('email', 'test@example.com');
      result.current.setFieldValue('password', '12345678');
      result.current.setFieldValue('confirmPassword', '12345678');
    });

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as unknown as React.FormEvent);
    });

    expect(onSubmit).toHaveBeenCalled();
    expect(result.current.values.email).toBe('');
  });
});
