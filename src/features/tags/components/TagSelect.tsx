import { useState } from 'react';
import { ActionMeta, MultiValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { TagOption } from '../types';
import { useTagStore } from '../stores/tagStore';

type TagSelectProps = {
  value: TagOption[];
  onChange: (value: TagOption[]) => void;
};

function TagSelect({ value, onChange }: TagSelectProps) {
  const tags = useTagStore(state => state.tagMap);
  const tagsObj = Array.from(tags).map(([_, value]) => {
    return { id: value.id, name: value.name };
  });

  const [options, setOptions] = useState<TagOption[]>(tagsObj);

  const handleChange = (
    newValue: MultiValue<TagOption>,
    _actionMeta: ActionMeta<TagOption>,
  ) => {
    onChange([...newValue]);
  };

  const handleCreate = (inputValue: string) => {
    const newOption: TagOption = {
      name: inputValue,
    };
    setOptions([...options, newOption]);

    onChange([...value, newOption]);
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
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            // primary25: 'bg-red-400',
            // primary: 'red',
          },
        })}
        classNames={{
          control: () =>
            'bg-white border border-gray-300 rounded-md shadow-sm hover:border-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500',
          input: () => 'text-gray-800',
          placeholder: () => 'text-gray-400',
          singleValue: () => 'text-gray-800',
          menu: () =>
            'bg-white border border-gray-200 rounded-md shadow-lg mt-1',
          option: ({ isFocused, isSelected }) =>
            `px-3 py-2 cursor-pointer ${
              isSelected
                ? 'bg-primary-500 text-white'
                : isFocused
                  ? 'bg-blue-100'
                  : ''
            }`,
        }}
      />
    </div>
  );
}

export default TagSelect;
