import { useState } from 'react';
import { ActionMeta, MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { TagOption } from '../types';
import { useTagStore } from '../stores/tagStore';

type TagSelectProps = {
  name: string;
  value: TagOption[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TagSelect({ name, value, onChange }: TagSelectProps) {
  const tags = useTagStore(state => state.tagMap);
  const tagsObj = Array.from(tags).map(([_, value]) => ({
    id: value.id,
    name: value.name,
  }));

  const [options, setOptions] = useState<TagOption[]>(tagsObj);

  const emitSyntheticEvent = (newValue: TagOption[]) => {
    const syntheticEvent = {
      target: {
        name,
        value: newValue,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
  };

  const handleChange = (
    newValue: MultiValue<TagOption>,
    _actionMeta: ActionMeta<TagOption>,
  ) => {
    emitSyntheticEvent([...newValue]);
  };

  const handleCreate = (inputValue: string) => {
    const newOption: TagOption = {
      name: inputValue,
    };
    setOptions(prev => [...prev, newOption]);
    emitSyntheticEvent([...value, newOption]);
  };

  return (
    <div className="w-full py-0">
      <CreatableSelect
        inputId="tag-select"
        isClearable
        isMulti
        onChange={handleChange}
        options={options}
        onCreateOption={handleCreate}
        value={value}
        getOptionValue={option => option.name}
        getOptionLabel={option => option.name}
        placeholder="Select or create a tag..."
        styles={{
          control: () => ({}),
          input: () => ({}),
          placeholder: () => ({}),
          singleValue: () => ({}),
          menu: () => ({}),
          option: () => ({}),
          multiValue: () => ({}),
          multiValueLabel: () => ({}),
          multiValueRemove: () => ({}),
          // valueContainer: () => ({}),
        }}
        // ✅ Only Tailwind classes for styling
        classNames={{
          control: () =>
            'flex min-h-[2.5rem] items-center gap-1 rounded-md border border-secondary-dark bg-inverted px-2 py-1 text-sm shadow-sm hover:border-secondary-light focus-within:border-secondary-dark focus-within:ring-1 focus-within:ring-secondary-dark',
          input: () => 'text-default',
          placeholder: () => 'text-muted',
          singleValue: () => 'text-muted',
          menu: () =>
            'bg-inverted border border-secondary-dark rounded-md shadow-lg mt-1 text-md',
          option: ({ isFocused, isSelected }) =>
            `px-3 py-2 cursor-pointer ${
              isSelected
                ? 'bg-red-500 text-white'
                : isFocused
                  ? 'bg-secondary-dark font-bold'
                  : ''
            }`,
          multiValue: () =>
            'flex items-center gap-1 rounded bg-secondary-dark px-2 py-0.5 text-default',
          multiValueLabel: () => 'text-md font-medium',
          multiValueRemove: () => 'cursor-pointer rounded hover:bg-muted p-0.5',
          valueContainer: () => 'gap-3',
        }}
      />
    </div>
  );
}

export default TagSelect;
