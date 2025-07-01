import React, { useRef, useEffect } from 'react';

type AutoResizeTextareaProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  className?: string;
};

const AutoResizeTextarea: React.FC<AutoResizeTextareaProps> = ({
  value,
  onChange,
  placeholder,
  className = '',
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full resize-none overflow-hidden p-2 rounded-md focus:outline-none focus:ring focus:ring-primary-500 ${className}`}
      rows={1}
    />
  );
};

export default AutoResizeTextarea;
