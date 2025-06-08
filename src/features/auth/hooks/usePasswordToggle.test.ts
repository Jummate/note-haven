import { renderHook, act } from '@testing-library/react';
import { usePasswordToggle } from './usePasswordToggle';

describe('usePasswordToggle', () => {
  it('should toggle password visibility and update input type and label', () => {
    const { result } = renderHook(() => usePasswordToggle());

    expect(result.current.visible).toBe(false);
    expect(result.current.inputType).toBe('password');
    expect(result.current.ariaLabel).toBe('Show password');

    act(() => result.current.toggle());
    expect(result.current.visible).toBe(true);
    expect(result.current.inputType).toBe('text');
    expect(result.current.ariaLabel).toBe('Hide password');

    act(() => result.current.toggle());
    expect(result.current.visible).toBe(false);
    expect(result.current.inputType).toBe('password');
    expect(result.current.ariaLabel).toBe('Show password');
  });
});
