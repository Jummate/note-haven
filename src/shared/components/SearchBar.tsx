import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import Input from './Input';
import { NOTES_URL } from '../../features/notes/constants/urls';

type SearchBarProps = {
  inputClassName?: string;
};

export default function SearchBar({ inputClassName = '' }: SearchBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';
  const [value, setValue] = useState(searchQuery);

  // Keep local state in sync when URL changes externally (e.g., from Header or tab click)
  useEffect(() => {
    setValue(searchQuery);
  }, [searchQuery]);

  function handleSearchInput(e: ChangeEvent<HTMLInputElement>) {
    const input = e.target.value;
    setValue(input);
    setSearchParams({ search: input });

    // if (location.pathname !== NOTES_URL) {
    //   navigate(`${NOTES_URL}?search=${encodeURIComponent(input)}`);
    // }
  }

  return (
    <Input
      type="search"
      name="search"
      placeholder="Search notes..."
      value={value}
      onChange={handleSearchInput}
      styles={inputClassName}
    />
  );
}
