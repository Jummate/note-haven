import { useState } from 'react';
import { ActionMeta, SingleValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useNoteStore } from '../../notes/stores/noteStore';

type Option = {
  value: string;
  label: string;
};

function TagSelect() {
  const tags = useNoteStore(state => state.tagMap);
  const tagsObj = Array.from(tags).map(([_, value]) => {
    return { value: value.name, label: value.name };
  });

  const [options, setOptions] = useState<Option[]>(tagsObj);
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<Option>>(null);

  const handleChange = (
    newValue: SingleValue<Option>,
    _actionMeta: ActionMeta<Option>,
  ) => {
    setSelectedOption(newValue);
  };

  const handleCreate = (inputValue: string) => {
    const newOption: Option = {
      label: inputValue,
      value: inputValue.toLowerCase().replace(/\s+/g, '-'),
    };
    setOptions(prev => [...prev, newOption]);
    setSelectedOption(newOption);
  };
  return (
    <div className="w-full py-0">
      <CreatableSelect
        inputId="tag-select"
        isClearable
        onChange={handleChange}
        options={options}
        onCreateOption={handleCreate}
        value={selectedOption}
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
