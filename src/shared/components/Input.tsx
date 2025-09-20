import React, { useRef } from 'react';
import clsx from 'clsx';

import { AppIcons } from '../icons/Icons';
import { usePasswordToggle } from '../../features/auth/hooks/usePasswordToggle';

type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'search'
  | 'tel'
  | 'url';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styles?: string;
  type?: InputType;
}

const defaultStyle =
  'rounded-xl p-4 w-full bg-transparent border border-muted-light hover:bg-surface text-default cursor-pointer focus:border-default focus:outline-none';
const eyeStyle = 'absolute right-3 w-8 h-8 z-10 cursor-pointer text-muted';
const searchStyle = 'absolute left-3 w-8 h-8 z-10 cursor-pointer';

function TextInput({ styles, ...props }: InputProps) {
  return <input {...props} className={clsx(defaultStyle, styles)} />;
}

function PasswordInput({ styles, ...props }: InputProps) {
  const { visible, inputType, toggle, ariaLabel } = usePasswordToggle();
  const HidePasswordIcon = AppIcons['hidePasswordIcon'];
  const ShowPasswordIcon = AppIcons['showPasswordIcon'];

  return (
    <div className="w-full relative flex items-center justify-center">
      <input
        {...props}
        type={inputType}
        className={clsx(defaultStyle, 'pr-14', styles)}
        placeholder={props.placeholder ?? 'Enter your password'}
      />

      <button
        type="button"
        onClick={toggle}
        aria-label={ariaLabel}
        title={ariaLabel}
        className={eyeStyle}
      >
        {visible ? (
          <HidePasswordIcon aria-hidden />
        ) : (
          <ShowPasswordIcon aria-hidden />
        )}
      </button>
    </div>
  );
}

function SearchInput({ styles, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const SearchIcon = AppIcons['search'];
  return (
    <div className="w-full relative flex items-center justify-center">
      <input
        {...props}
        type="search"
        className={clsx(defaultStyle, 'pl-14', styles)}
        placeholder={
          props.placeholder ?? 'Search by title, content, or tags...'
        }
        ref={inputRef}
      />

      <button
        className={searchStyle}
        aria-label="Focus search input"
        onClick={() => inputRef?.current?.focus()}
      >
        <SearchIcon aria-hidden="true" />
      </button>
    </div>
  );
}

function Input({ type = 'text', ...props }: InputProps) {
  switch (type) {
    case 'password':
      return <PasswordInput {...props} type={type} />;
    case 'search':
      return <SearchInput {...props} />;
    default:
      return <TextInput {...props} type={type} />;
  }
}

export default Input;
